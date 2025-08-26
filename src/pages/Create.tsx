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
  const isValidTemplate = template_id && template !== undefined;

  return (
    <div className="flex flex-col w-full h-screen app-gradient items-center justify-center">
      {!isValidTemplate ? (
        // TODO handle invalid template_id (show error message)
        <></>
      ) : (
        <div className="h-fit w-full px-[10vw] py-[15vh] flex flex-row items-start justify-center">
          <TemplateTileStatic {...template} />
          <CreateCardForm template_id={template_id} />
        </div>
      )}
    </div>
  );
}
