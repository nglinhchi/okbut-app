import { Link } from "react-router-dom";
import type { Template } from "../../../types";
import Button from "./Button";

export default function TemplateTile(template: Template) {
  return (
    <div className="template-tile flex flex-col items-center bg-white p-4 gap-2 rounded-2xl w-full h-full text-black text-align-left items-start shadow-xl">
      <img
        className="w-full h-60 object-cover mb-4 rounded-xl"
        src={template.image_url}
        alt={template.name}
      />
      <div className="flex-grow">
        <p>{template.name}</p>
        <p>{template.description}</p>
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-4 w-full xl:self-end">
        <Button variant="muted" className="mt-4 w-full">
          <Link to={`/view/${template.preview_card_id}`} target="_blank">
            PREVIEW
          </Link>
        </Button>
        <Button variant="default" className="mt-4 w-full">
          <Link to={`/create/${template.id}`}>CREATE</Link>
        </Button>
      </div>
    </div>
  );
}
