import type { Template } from "../../types";

export default function StaticTemplateTile(template: Template) {
  return (
    <div className="template-tile flex flex-col items-center bg-white p-4 gap-2 rounded-2xl w-80 h-fit text-black text-align-left items-start shadow-xl">
      <img
        className="w-full h-60 object-cover mb-4 rounded-xl"
        src={template.image_url}
        alt={template.name}
      />
      <p>{template.name}</p>
      <p>{template.description}</p>
    </div>
  );
}
