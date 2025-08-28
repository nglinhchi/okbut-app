import { useState } from "react";
import Button from "./Button";

interface ShareLinkProps {
  cardId: string;
}

export default function ShareLink(props: ShareLinkProps) {
  const { cardId } = props;

  const displayUrl = `okbut.io/view/${cardId}`;
  const url = `http://localhost:3000/view/${cardId}`; // TODO use actual domain in prod
  // const url = `http://okbut.io/view/${cardId}`;

  const [copied, setCopied] = useState(false);

  const copyButtonText = copied ? "COPIED! :D" : "COPY LINK";

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const handleOpen = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-fit h-fit bg-white rounded-2xl p-8 text-black shadow-xl flex flex-col md:flex-row items-center justify-center gap-4">
      <div className="flex items-center justify-center px-8 py-4 border-2 border-black rounded-lg">
        {displayUrl}
      </div>
      <Button variant="muted" className="w-full md:w-fit" onClick={handleOpen}>
        OPEN LINK
      </Button>
      <Button
        variant="default"
        className="w-full md:w-fit"
        onClick={handleCopy}
      >
        {copyButtonText}
      </Button>
    </div>
  );
}
