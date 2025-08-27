import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import TemplateTileStatic from "../components/StaticTemplateTile";
import type { Template } from "../../types";
import CreateCardForm from "../components/CreateCardForm";
import Footer from "../components/Footer";

export default function Create() {
  const { template_id } = useParams<{ template_id: string }>();
  const { templates } = useAppContext();
  const template: Template | undefined = templates.find(
    (t) => t.id === template_id
  );
  const isValidTemplate = template_id && template !== undefined;

  return (
    <div>
      {!isValidTemplate ? (
        // TODO handle invalid template_id (show error message)
        <></>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="hero-section flex flex-col items-center justify-center gap-8 px-[20vw] py-[15vh] text-center w-full">
            <h1>Card is cooking...</h1>
          </div>
          <div className="flex flex-col w-full h-fit app-gradient-lg items-center justify-center">
            <div className="h-fit w-full px-[10vw] py-[15vh] flex md:flex-row flex-col items-start justify-center gap-8">
              <TemplateTileStatic {...template} />
              <CreateCardForm template_id={template_id} />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
