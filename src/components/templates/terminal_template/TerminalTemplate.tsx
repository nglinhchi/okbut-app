import type { TemplateProps } from "../../../pages/View";
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
  onComplete: () => void;
}

// TODO might change to include both message + gif
interface GifLine extends Line {
  category: "GIF";
  id: string;
}

export default function TerminalTemplate(props: TemplateProps) {
  const { card } = props;
  return (
    <div>
      Terminal Template:
      <p>from: {card.sender}</p>
      <p>to: {card.recipient}</p>
      <p>message: {card.message}</p>
      <img
        src={`https://media.giphy.com/media/${card.giphy_id}/giphy.gif`}
        alt="Selected GIF"
        className="max-h-96 w-auto mx-auto"
      />
    </div>
  );
const Prefix = () => {
  return <div className="text-gray-500 pr-2">okbut:~/$</div>;
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
}

const BarLine = (props: BarLineProps) => {
  const { line } = props;
  const [progress, setProgress] = useState(0);
  const { duration, onComplete } = line;

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
          }, duration); // Small delay to ensure animation completes
        }
        return newProgress;
      });
    }, interval / 3); // update more frequently for smoother animation

    return () => clearInterval(progressInterval);
  }, [duration, onComplete]);

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
    <div className="flex flex-row items-start justify-start">
      <Prefix />
      <div className="flex flex-row text-cyan-300">
        {prompt}
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
  const { id } = line;
  return (
    <img
      src={`https://media.giphy.com/media/${id}/giphy.gif`}
      alt="Selected GIF"
      className="max-h-96 w-auto"
    />
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
