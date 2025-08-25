import { useEffect, useRef } from "react";
import type { CardData } from "../../types";
import { getCardById, insertCard } from "../../lib/queries";

export default function Home() {
  const hasRun = useRef(false);
  useEffect(() => {
    if (hasRun.current) return;
    // toggle this to true, to by pass strict mode double rendering in dev
    hasRun.current = true;
    // IIFE to use async/await
    const run = async () => {
      const card: CardData = {
        id: "id-123",
        template_id: "template_1",
        sender: "chloe",
        recipient: "jaiden",
        message: "hi!",
        giphy_id: "giphy_123",
      };
      const response = await insertCard(card);
      console.log("insert response:", response);
    };

    run();

    const run2 = async () => {
      const response = await getCardById("id-123");
      console.log("get response:", response);
    };

    run2();
  }, []);

  return <>home</>;
}
