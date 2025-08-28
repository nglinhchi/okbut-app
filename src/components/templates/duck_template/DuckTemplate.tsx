import "./DuckTemplate.css";
import { useState } from "react";
import type { TemplateProps } from "../../../pages/View";
import Screen1 from "./pages/Screen1";
import Screen2 from "./pages/Screen2";
import Screen3 from "./pages/Screen3";
import Screen4 from "./pages/Screen4";

export default function DuckTemplate(props: TemplateProps) {
  const { card } = props;

  const [screen, setScreen] = useState(1);

  return (
    <>
      {screen === 1 && <Screen1 onStart={() => setScreen(2)} />}
      {screen === 2 && <Screen2 onFedCorrectly={() => setScreen(3)} />}
      {screen === 3 && <Screen3 onReveal={() => setScreen(4)} />}
      {screen === 4 && <Screen4 card={card} />}
    </>
  );
}
