import Button from "./Button";

export default function ShareLink() {
  return (
    <div className="w-fit h-fit bg-white rounded-2xl p-8 text-black shadow-xl flex flex-col md:flex-row items-center justify-center gap-4">
      <div className="flex items-center justify-center px-8 py-4 border-2 border-black rounded-lg">
        okbut.io/view/V1StGXR8_Z5jdHi6B-myT
      </div>
      <Button variant="muted" className="w-full md:w-fit">
        OPEN LINK
      </Button>
      <Button variant="default" className="w-full md:w-fit">
        COPY LINK
      </Button>
    </div>
  );
}
