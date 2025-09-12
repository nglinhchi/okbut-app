import "./TerminalTemplate.css";
import type { TemplateProps } from "../../../pages/View";
import { useState, useEffect, useRef } from "react";

type LineCategory = "INFO" | "INPUT" | "BAR" | "GIF" | "BREAK";

interface Line {
  category: LineCategory;
  duration: number;
}

interface BreakLine extends Line {
  category: "BREAK";
}

interface InfoLine extends Line {
  category: "INFO";
  prompt: string;
  stopNextLine?: boolean;
  type?: "retry" | "exit" | "message" | "success";
}

interface InputLine extends Line {
  category: "INPUT";
  prompt: string;
  attempts: number;
  correctAnswer: (input: string) => boolean;
  continueLine?: InfoLine;
  exitLine: InfoLine;
}

interface BarLine extends Line {
  category: "BAR";
}

// TODO might change to include both message + gif
interface GifLine extends Line {
  category: "GIF";
  id: string;
  message: string;
}

export default function TerminalTemplate(props: TemplateProps) {
  const { card } = props;

  // ref to terminal -> whenever visibleLines changes, scroll to bottom
  const terminalRef = useRef<HTMLDivElement>(null);

  const [canAdvance, setCanAdvance] = useState(false);

  const lines: (BreakLine | InfoLine | InputLine | BarLine | GifLine)[] = [
    { category: "INFO", duration: 500, prompt: "booting system..." },
    {
      category: "BAR",
      duration: 2000,
    },
    { category: "INFO", duration: 1000, prompt: "system booted." },
    { category: "BREAK", duration: 200 },
    { category: "INFO", duration: 800, prompt: `verifying user...` },
    {
      category: "INPUT",
      duration: 500,
      attempts: 1,
      prompt: `are you ${card.recipient}? (y/n)`,
      correctAnswer: (input: string) => input.trim().toLowerCase() === "y",
      exitLine: {
        category: "INFO",
        duration: 500,
        prompt: `access denied.`,
        stopNextLine: true,
        type: "exit",
      },
    },
    {
      category: "INPUT",
      duration: 0,
      attempts: 1,
      prompt: `do you think ${card.sender} is a nice person? (y/n)`,
      correctAnswer: (input: string) => input.trim().toLowerCase() === "y",
      continueLine: {
        category: "INFO",
        duration: 1500,
        prompt: "user authenticated.",
        stopNextLine: true,
        type: "success",
      },
      exitLine: {
        category: "INFO",
        duration: 500,
        prompt: `access denied.`,
        type: "exit",
      },
    },
    { category: "BREAK", duration: 500 },
    {
      category: "INFO",
      prompt: `verifying access control...`,
      duration: 800,
    },
    {
      category: "INPUT",
      duration: 0,
      attempts: 3,
      prompt: `${card.question?.toLowerCase()}`,
      correctAnswer: (input: string) =>
        input.trim().toLowerCase() === card.answer!.trim().toLowerCase(),
      continueLine: {
        category: "INFO",
        prompt: "access granted.",
        duration: 1500,
        type: "success",
      },
      exitLine: {
        category: "INFO",
        duration: 500,
        prompt: `incorrect. no more attempts allowed. access denied.`,
        stopNextLine: true,
        type: "exit",
      },
    },
    { category: "BREAK", duration: 500 },
    { category: "BREAK", duration: 500 },
    { category: "INFO", duration: 100, prompt: "executing tea.exe..." },
    { category: "BAR", duration: 1000 },
    { category: "BAR", duration: 1000 },
    { category: "BAR", duration: 1000 },
    { category: "BAR", duration: 1000 },
    { category: "BAR", duration: 1000 },
    { category: "BREAK", duration: 500 },
    { category: "INFO", duration: 100, prompt: "comfirming operation..." },
    {
      category: "INPUT",
      duration: 1000,
      attempts: 1,
      prompt: `spill tea.exe? (y/n)`,
      correctAnswer: (input: string) => input.trim().toLowerCase() === "y",
      exitLine: {
        category: "INFO",
        duration: 0,
        prompt: `operation cancelled.`,
        stopNextLine: true,
        type: "exit",
      },
    },
    { category: "INFO", duration: 500, prompt: "." },
    { category: "INFO", duration: 500, prompt: "." },
    { category: "INFO", duration: 1000, prompt: "." },
    {
      category: "GIF",
      duration: 2000,
      id: card.giphy_id!,
      message: card.message,
    },
    // {
    //   category: "INFO",
    //   duration: 500,
    //   prompt: card.message,
    //   type: "message",
    // },
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);

  function nextLine() {
    if (!canAdvance) return;
    setCurrentLineIndex((prev) => prev + 1);
  }

  const [visibleLines, setVisibleLines] = useState<
    (BreakLine | InfoLine | InputLine | BarLine | GifLine)[]
  >([]);

  const [displayingLines, setDisplayingLines] = useState<React.ReactNode[]>([]);

  // handle user input

  const [attempted, setAttempted] = useState<number>(0);

  const handleUserInputSubmit = (line: InputLine, userInput: string) => {
    const { attempts, correctAnswer, continueLine, exitLine } = line;

    const isSingleAttempt = attempts === 1;
    const isMultiAttempt = attempts > 1;

    if (correctAnswer(userInput)) {
      if (continueLine) setVisibleLines((prev) => [...prev, continueLine]);
      setCanAdvance(true);
      nextLine();
      return;
    } else if (isSingleAttempt) {
      setVisibleLines((prev) => [...prev, exitLine]);
      return;
    } else if (isMultiAttempt) {
      const remainingAttempts = attempts - attempted - 1;
      if (remainingAttempts === 0) {
        setVisibleLines((prev) => [...prev, exitLine]);
        return;
      } else {
        setAttempted((prev) => prev + 1);
        const retryLine: InfoLine = {
          category: "INFO",
          duration: 500,
          prompt: `incorrect. please try again. ${remainingAttempts} ${
            remainingAttempts === 1 ? "attempt" : "attempts"
          } left.`,
          stopNextLine: true,
          type: "retry",
        };
        setVisibleLines((prev) => [...prev, retryLine]);
      }
    }
    return;
  };

  const handleBarComplete = () => {
    setCanAdvance(true);
    nextLine();
  };

  // STEP 1: when index changes -> add new line to visibleLines
  useEffect(() => {
    if (currentLineIndex < lines.length) {
      setVisibleLines((prev) => [...prev, lines[currentLineIndex]]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLineIndex]);

  // STEP 2: when visibleLines changes -> add new line to displayingLines (render)
  useEffect(() => {
    if (visibleLines.length === 0) return;

    // push new line to displayingLines
    const newLine = visibleLines[visibleLines.length - 1];
    let newDisplayLine: React.ReactNode;
    switch (newLine.category) {
      case "INFO":
        const line = newLine as InfoLine;
        setCanAdvance(line.type !== "exit" && line.type !== "retry");
        newDisplayLine = <InfoLine line={line} />;
        break;
      case "INPUT":
        setCanAdvance(false);
        newDisplayLine = (
          <InputLine
            line={newLine as InputLine}
            onSubmit={handleUserInputSubmit}
          />
        );
        break;
      case "BAR":
        setCanAdvance(false);
        newDisplayLine = (
          <BarLine line={newLine as BarLine} onComplete={handleBarComplete} />
        );
        break;
      case "GIF":
        setCanAdvance(true);
        newDisplayLine = <GifLine line={newLine as GifLine} />;
        break;
      case "BREAK":
        setCanAdvance(true);
        newDisplayLine = <BreakLine />;
        break;
      default:
        setCanAdvance(false);
        return;
    }
    setDisplayingLines((prev) => [...prev, newDisplayLine]);

    if (newLine.category === "INFO" && newLine.type === "retry") {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, lines[currentLineIndex]]);
      }, 1000);
    }

    // scroll to botton
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 50); // small delay to ensure DOM has updated

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleLines]);

  useEffect(() => {
    if (visibleLines.length === 0) return;
    // start the sequence
    const lastLine = visibleLines[visibleLines.length - 1];
    const delay = Math.max(lastLine.duration, 1000);
    setTimeout(() => {
      nextLine();
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayingLines]);

  // window control buttons
  const windowController = (
    <div className="h-1/15 bg-primary flex flex-row items-center justify-start gap-2 pl-4">
      <div className="h-[2vh] w-[2vh] rounded-full bg-black"></div>
      <div className="h-[2vh] w-[2vh] rounded-full bg-black"></div>
      <div className="h-[2vh] w-[2vh] rounded-full bg-black"></div>
    </div>
  );

  return (
    <div className="terminal_template w-full h-full rounded-xl p-8">
      <div className="bg-black/40 backdrop-blur-sm text-green-500 font-mono h-full rounded-sm text-xs">
        {windowController}
        <div
          ref={terminalRef}
          className="p-4 h-14/15 w-full flex flex-col gap-1 overflow-y-auto items-start"
        >
          {displayingLines}
        </div>
      </div>
    </div>
  );
}

const Prefix = () => {
  return (
    <div className="text-gray-500 pr-2">
      <span className="hidden lg:inline">okbut:~/$</span>
      <span className="lg:hidden">~/$</span>
    </div>
  );
};

const BreakLine = () => {
  return (
    <div className="flex flex-row items-start justify-start">
      <Prefix />
    </div>
  );
};

interface InfoLineProps {
  line: InfoLine;
}

const InfoLine = (props: InfoLineProps) => {
  const { line } = props;
  const { prompt } = line;

  let className = "";

  switch (line.type) {
    case "retry":
      className = "text-red-500";
      break;
    case "exit":
      className = "text-red-500";
      break;
    case "message":
      className = "text-blue-400";
      break;
    case "success":
      className = "text-green-400";
      break;
    default:
      className = "text-gray-300";
  }

  return (
    <div className="flex flex-row items-start justify-start">
      <Prefix />
      <div className={className}>{prompt}</div>
    </div>
  );
};

interface BarLineProps {
  line: BarLine;
  onComplete: () => void;
}

const BarLine = (props: BarLineProps) => {
  const { line, onComplete } = props;
  const [progress, setProgress] = useState(0);
  const { duration } = line;

  useEffect(() => {
    const totalSteps = 20; // total blocks
    const interval = duration / totalSteps; // load time per block

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.floor(Math.random() * 3) + 1; // 1-3 blocks at a time
        const newProgress = Math.min(prev + increment, totalSteps);
        if (newProgress === totalSteps) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 100); // Small delay to ensure animation completes
        }
        return newProgress;
      });
    }, interval / 3); // update more frequently for smoother animation

    return () => clearInterval(progressInterval);
  }, [duration]);

  const filled = "█".repeat(progress);
  const empty = "░".repeat(20 - progress);

  return (
    <div className="flex flex-row items-start justify-start">
      <Prefix />
      {filled}
      {empty}
    </div>
  );
};

interface InputLineProps {
  line: InputLine;
  onSubmit: (line: InputLine, userInput: string) => void;
}

const InputLine = (props: InputLineProps) => {
  const { line, onSubmit } = props;
  const { prompt } = line;

  const [userInput, setUserInput] = useState<string>("");
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex">
        <Prefix /> <div className="text-cyan-300">{prompt}</div>
      </div>
      <div className="flex">
        <Prefix />
        <Input
          userInput={userInput}
          setUserInput={setUserInput}
          line={line}
          onSubmit={() => onSubmit(line, userInput)}
        />
      </div>
    </div>
  );
};

interface GifLineProps {
  line: GifLine;
}

const GifLine = (props: GifLineProps) => {
  const { line } = props;
  const { id, message } = line;
  return (
    <div className="flex flex-col items-start justify-start">
      <img
        src={`https://media.giphy.com/media/${id}/giphy.gif`}
        alt="Selected GIF"
        className="max-h-96 w-auto"
      />
      {message}
    </div>
  );
};

interface InputProps {
  userInput: string;
  setUserInput: (newValue: string) => void;
  line: InputLine;
  onSubmit: (line: InputLine, userInput: string) => void;
}

const Input = (props: InputProps) => {
  const { userInput, setUserInput, line, onSubmit } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const [disabled, setDisabled] = useState(false);

  // auto-focus when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      className="bg-transparent border-b border-yellow-300 focus:outline-none ml-2 text-white font-bold"
      value={userInput}
      onChange={(e) => {
        setUserInput(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setDisabled(true);
          onSubmit(line as InputLine, userInput);
        }
      }}
      autoFocus
      disabled={disabled}
    />
  );
};

/**
TODO:
- [x] add giphy at the end (optional: click to open modal)
- [x] each line should appear after a delay]
- [x] line, allow optional user input + conditional rendering based on input
- [x] scroll to bottom on new line
- [ ] animate text typing for message
- [ ] click to expand message + gif

LINE TYPES:
- normal text line (typewriter effect)
- progress bar line (animated)
- user input line (with conditional rendering)
- giphy/message line (image display)

COMPONENTS:
- prefix
- break line
- info line
- input line
- progress bar line
- giphy (message) line

*/

/**
setCanAdvance(false)
- on initialization
- render: info (stopNextLine) + input + bar

setCanAdvance(true)
- render: info (no stopNextLine) + break + gif
- correct input
- bar onComplete

nextLine
- canAdvance = true

FLOW
index change 
-> add new line to visiblelines 
-> add new line to displaying lines 
-> advance to next line

 */
