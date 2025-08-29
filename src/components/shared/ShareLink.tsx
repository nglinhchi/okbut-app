import { useState } from "react";
import Button from "./Button";

interface ShareLinkProps {
  cardId: string;
}

export default function ShareLink(props: ShareLinkProps) {
  const { cardId } = props;
  // const testDomain = import.meta.env.VITE_DOMAIN_NAME_TEST;
  const prodDomain = import.meta.env.VITE_DOMAIN_NAME_PROD;

  const displayUrl = `${prodDomain}/view/${cardId}`;
  const url = `/view/${cardId}`; // NOTE: toggle this for environment

  const [copied, setCopied] = useState(false);

  const copyButtonText = copied ? "COPIED! :D" : "COPY LINK";

  const handleCopy = () => {
    navigator.clipboard.writeText(displayUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const handleOpen = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-[80vw] md:w-fit h-fit bg-white rounded-2xl p-8 text-black shadow-xl flex flex-col md:flex-row items-center justify-center gap-4">
      <div className="flex items-center justify-center px-8 py-4 border-2 border-black rounded-lg w-full md:w-fit text-center break-all">
        {displayUrl}
      </div>
      <Button
        variant="muted"
        className="w-full mt-2 md:mt-0 md:w-fit"
        onClick={handleOpen}
      >
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
