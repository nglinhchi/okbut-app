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
