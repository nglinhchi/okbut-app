import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import TemplateTileStatic from "../components/StaticTemplateTile";
import type { Template } from "../../types";
import CreateCardForm from "../components/CreateCardForm";
import Footer from "../components/Footer";
import TypeWriter from "typewriter-effect";

export default function Create() {
  const { template_id: templateId } = useParams<{ template_id: string }>();
  const { templates } = useAppContext();

  const template: Template | undefined = templates.find(
    (t) => t.id === templateId
  );
  const isValidTemplate = templateId !== undefined && template !== undefined;

  return (
    <div>
      {!isValidTemplate ? (
        // TODO handle invalid template_id (show error message)
        <></>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="hero-section flex flex-col items-center justify-center gap-8 px-[20vw] py-[10vh] text-center w-full">
            <h2 className="italic">
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Card is cooking...")
                    .pauseFor(500)
                    .deleteChars(3)
                    .typeString("...")
                    .pauseFor(1000)
                    .deleteChars(3)
                    .typeString("...")
                    .pauseFor(2000)
                    .deleteChars(3)
                    .typeString("...")
                    .start();
                }}
              />
            </h2>
          </div>
          <div className="flex flex-col w-full h-fit app-gradient-lg items-center justify-center">
            <div className="h-fit w-full px-[10vw] py-[5vh] flex md:flex-row flex-col items-start justify-center gap-8">
              <TemplateTileStatic {...template} />
              <CreateCardForm templateId={templateId} />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
