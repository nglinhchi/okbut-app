import Footer from "../components/shared/Footer";
import TemplateTile from "../components/shared/TemplateTile";
import type { Template } from "../../types";
import { useAppContext } from "../context/AppContext";
import TypeWriter from "typewriter-effect";
import TeaserTemplateTile from "../components/shared/TeaserTemplateTile";
import { useState } from "react";
import { cn } from "../../lib/utils";
import Icon from "../components/shared/Icon";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { templates } = useAppContext();

  const [showDesccription, setShowDescription] = useState(false);

  const [showChevron, setShowChevron] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="hero-section flex h-screen flex-col items-center justify-center gap-8 px-[20vw] py-[15vh] text-center w-full">
        <h1>
          <TypeWriter
            options={{
              delay: 50, // deafult = 75ms
              deleteSpeed: 25, // default = 50ms
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Ok, but...")
                .pauseFor(1000)
                .typeString(" hear me out.")
                .pauseFor(1000)
                .callFunction(() => {
                  setShowDescription(true);
                })
                .pauseFor(500)
                .callFunction(() => {
                  setShowChevron(true);
                })
                .start();
            }}
          />
        </h1>
        <p
          className={cn(
            "lg:w-[40%]",
            showDesccription ? "opacity-100" : "opacity-0",
            "transition-opacity duration-2000"
          )}
        >
          <strong>OKBUT.io</strong> lets you send fun, personalised interactive
          cards to your special ones. Whether it's an unhinged inside joke or a
          heartfelt appreciation note, we've got you covered :&#41;
        </p>
        {/* CHEVRON DOWN appears after typewriter finishes */}
        <div
          className={`absolute bottom-16 transition-opacity duration-1000 cursor-pointer ${
            showChevron ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            const readmeSection = document.querySelector("#templates");
            if (readmeSection) {
              readmeSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <Icon
            icon={faChevronDown}
            className="text-2xl text-primary animate-bounce hover:text-white transition-colors"
          />
        </div>
      </div>
      <div
        id="templates"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 app-gradient-lg h-fit w-full py-[5vh] px-[10vw] justify-items-center align-items-center text-black"
      >
        {templates.map((template: Template) =>
          template.published ? (
            <TemplateTile key={template.id} {...template} />
          ) : (
            <TeaserTemplateTile key={template.id} {...template} />
          )
        )}
      </div>

      <Footer />
    </div>
  );
}
