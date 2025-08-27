import type { Template } from "../../types";

export default function StaticTemplateTile(template: Template) {
  return (
    <div className="template-tile flex flex-col bg-white p-4 gap-2 rounded-2xl md:w-80 w-full h-fit text-black text-align-left items-start shadow-xl">
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
