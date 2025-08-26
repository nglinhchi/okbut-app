import { Link } from "react-router-dom";
import type { Template } from "../../types";

export default function TemplateTile(template: Template) {
  return (
    <div className="template-tile flex flex-col items-center bg-white p-4 gap-2 rounded-2xl w-full h-fit text-black text-align-left items-start shadow-xl">
      <img
        className="w-full h-60 object-cover mb-4 rounded-xl"
        src={template.image_url}
        alt={template.name}
      />
      <p>{template.name}</p>
      <p>{template.description}</p>
      <div className="flex flex-row gap-4 w-full">
        <button className="bg-gray-200 text-black px-4 py-2 rounded-xl mt-4 self-center hover:bg-gray-800 transition w-full">
          <Link to={`/view/${template.preview_card_id}`} target="_blank">
            PREVIEW
          </Link>
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-xl mt-4 self-center hover:bg-gray-800 transition w-full">
          <Link to={`/create/${template.id}`}>CREATE</Link>
        </button>
      </div>
    </div>
  );
}
