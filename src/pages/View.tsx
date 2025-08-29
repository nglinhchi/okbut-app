import { useEffect, useState } from "react";
import { getCardById } from "../../lib/queries";
import { useParams } from "react-router-dom";
import type { CardData } from "../../types";
import Card from "../components/shared/Card";
import Logo from "../components/shared/Logo";
import Loading from "../components/shared/Loading";
import NotFound from "./NotFound";
import DuckTemplate from "../components/templates/duck_template/DuckTemplate";
import ScrollToTop from "../components/shared/ScrollToTop";

// props interface used by all templates
export interface TemplateProps {
  card: CardData;
}

export default function View() {
  const { card_id: cardId } = useParams<{ card_id: string }>();
  const [card, setCard] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCard() {
      if (!cardId) return;
      const data = await getCardById(cardId);
      setCard(data);
      setLoading(false);
    }
    fetchCard();
  }, [cardId]);

  if (!cardId) {
    return <NotFound />;
  }
  if (loading) return <Loading />;
  if (!card) return <NotFound />;

  const templateId = card.template_id;
  let cardTemplate: React.ReactNode;
  switch (templateId) {
    case "1":
      cardTemplate = <DuckTemplate card={card} />;
      break;
    // case "2":
    //   cardTemplate = <PeekabooTemplate card={card} />;
    //   break;
    // case "3":
    //   cardTemplate = <TerminalTemplate card={card} />;
    //   break;
    default:
      return <NotFound />;
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ScrollToTop />
      {/* background gradient for bottom half */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 app-gradient-lg z-0" />

      {/* foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-[10vw] py-[10vh] gap-[5vh]">
        <Card className="h-[70vh] flex flex-col items-center justify-center">
          {cardTemplate}
        </Card>
        <div className="signature flex flex-row items-center justify-center gap-2 text-center text-sm text-black h-[5vh]">
          <p>created with</p>
          <Logo />
        </div>
      </div>
    </div>
  );
}
