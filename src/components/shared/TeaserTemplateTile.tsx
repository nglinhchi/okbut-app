import type { Template } from "../../../types";

export default function TeaserTemplateTile(template: Template) {
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
      <div
        className="flex w-full bg-ui-gradient rounded-xl px-4 py-6 mt-4
       items-center justify-center text-white font-bold text-xl"
      >
        COMING SOON!
      </div>
    </div>
  );
}
