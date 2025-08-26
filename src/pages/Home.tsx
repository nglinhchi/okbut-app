import type { Template } from "../../types";
import Footer from "../components/Footer";
import TemplateTile from "../components/TemplateTile";

export default function Home() {
  const templates: Template[] = [
    {
      id: "1",
      name: "Template 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      image_url: "/src/assets/duck.jpg",
      preview_card_id: "00000001",
    },
    {
      id: "2",
      name: "Template 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      image_url: "/src/assets/gradient.webp",
      preview_card_id: "00000002",
    },
    {
      id: "3",
      name: "Template 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      image_url: "/src/assets/confetti.jpg",
      preview_card_id: "00000003",
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
      {/* TODO need consolidate grid layout */}
        {templates.map((template) => (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 app-gradient h-fit w-full py-32 px-[10vw] justify-items-center align-items-center">
          <TemplateTile key={template.id} {...template} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
