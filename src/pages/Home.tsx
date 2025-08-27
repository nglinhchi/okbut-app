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
          <strong>okbut.io</strong> lets you send fun, personalised cards to
          your special ones. Whether it's an out-of-the-blue joke, or a
          heartfelt appreciation note, we got you covered.
        </p>
      </div>
      {/* TODO need consolidate grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 app-gradient-lg h-fit w-full py-32 px-[10vw] justify-items-center align-items-center">
        {templates.map((template: Template) => (
          <TemplateTile key={template.id} {...template} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
