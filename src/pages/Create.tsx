import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import TemplateTileStatic from "../components/StaticTemplateTile";
import type { Template } from "../../types";
import CreateCardForm from "../components/CreateCardForm";

export default function Create() {
  const { template_id } = useParams<{ template_id: string }>();
  const { templates } = useAppContext();
  const template: Template | undefined = templates.find(
    (t) => t.id === template_id
  );
  const isValidTemplate = template !== undefined;

  return (
    <div className="flex flex-col w-full app-gradient">
      {!isValidTemplate ? (
        // TODO handle invalid template_id (show error message)
        <></>
      ) : (
        <>
          {/* <div className="flex flex-col items-center justify-center gap-12 px-[20vw] py-[10vh] text-center w-full">
            <h2>Card is cooking...</h2>
          </div> */}
          <div className="h-fit w-full px-[10vw] py-[15vh] flex flex-row items-start justify-center">
            <TemplateTileStatic {...template} />
            <CreateCardForm />
          </div>
        </>
      )}
    </div>
  );
}
