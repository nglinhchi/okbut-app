import type { TemplateProps } from "../../pages/View";

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
