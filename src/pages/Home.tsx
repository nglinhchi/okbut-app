import type { Template } from "../../types";
import TemplateTile from "../components/TemplateTile";

export default function Home() {
  const templates: Template[] = [
    {
      id: "1",
      name: "Template 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      image_url: "/src/assets/duck.jpg",
    },
    {
      id: "2",
      name: "Template 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      image_url: "/src/assets/gradient.webp",
    },
    {
      id: "3",
      name: "Template 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      image_url: "/src/assets/confetti.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="hero-section flex flex-col items-center justify-center gap-8 px-[20vw] py-[15vh] text-center w-full">
        <h1>Ok, but...</h1>
        <p className="lg:w-[40%]">
          <strong>okbut.io</strong> lets you send fun, personalised cards to
          your special ones. Whether it's an out-of-the-blue joke, or a
          heartfelt appreciation note, we got you covered.
        </p>
      </div>
      {/* TODO need consolidate grid layout again */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 background-gradient h-fit w-full py-32 px-[10vw] justify-items-center align-items-center">
        {templates.map((template) => (
          <TemplateTile key={template.id} {...template} />
        ))}
      </div>
    </div>
  );
}
