import { useEffect, useState } from "react";
import { getCardById } from "../../lib/queries";
import { useParams } from "react-router-dom";
import type { CardData } from "../../types";
import Card from "../components/Card";
import Logo from "../components/Logo";

export default function View() {
  const { card_id: cardId } = useParams<{ card_id: string }>();
  const [card, setCard] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCard() {
      if (!cardId) return;
      const data = await getCardById(cardId);
      setCard(data);
      console.log(data);
      setLoading(false);
    }
    fetchCard();
  }, [cardId]);

  if (loading) return <div>Loading...</div>; // TODO implement loading page
  if (!card) return <div>Card not found</div>; // TODO redirect to 404 page

  // TODO validate template_id
  // TODO pick template component based on template_id

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* background gradient for bottom half */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 app-gradient-lg z-0" />

      {/* foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-[10vw] py-[10vh] gap-[5vh]">
        <Card className="h-[70vh]" />
        <div className="signature flex flex-row items-center justify-center gap-2 text-center text-sm text-black h-[5vh]">
          <p>created with</p>
          <Logo />
        </div>
      </div>
    </div>
  );
}
