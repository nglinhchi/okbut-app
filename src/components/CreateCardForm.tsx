import GiphyPicker from "./GiphyPicker";
import Input from "./Input";
import TextArea from "./TextArea";

export default function CreateCardForm() {
  return (
    <div className="w-3/5 h-fit bg-white rounded-2xl p-8 ml-8 text-black shadow-xl flex flex-col gap-4">
      <Input type="text" label="Sender's name" placeholder="Ariana Grande" />
      <Input type="text" label="Receiver's name" placeholder="John Doe" />
      <TextArea
        label="Message"
        value=""
        onChange={(e) => {
          console.log(e);
        }}
        placeholder="Happy 100th Birthday!"
        rows={4}
        className=""
        required={true}
      />
      <GiphyPicker />
      <button className="bg-black text-white px-12 py-2 rounded-xl mt-4 hover:bg-gray-800 transition w-fit self-end">
        GENERATE CARD
      </button>
    </div>
  );
}
