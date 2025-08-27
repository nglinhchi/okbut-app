import Footer from "../components/Footer";
import TemplateTile from "../components/TemplateTile";
import type { Template } from "../../types";
import { useAppContext } from "../context/AppContext";

export default function Home() {
  const { templates } = useAppContext();

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="hero-section flex flex-col items-center justify-center gap-8 px-[20vw] py-[15vh] text-center w-full">
        <h1>Ok, but...</h1>
        <p className="lg:w-[40%]">
          <strong>OKBUT.io</strong> lets you send fun, personalised interactive
          cards to your special ones. Whether it's an unhinged inside joke or a
          heartfelt appreciation note, we got you covered :&#41;
        </p>
      </div>
      {/* TODO need consolidate grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 app-gradient-lg h-fit w-full py-[5vh] px-[10vw] justify-items-center align-items-center text-black">
        {templates.map((template: Template) => (
          <TemplateTile key={template.id} {...template} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
