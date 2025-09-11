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
}
