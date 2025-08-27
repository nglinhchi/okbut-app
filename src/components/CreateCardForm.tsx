import { useState } from "react";
import type { CardData } from "../../types";
import GiphyPicker from "./GiphyPicker";
import Input from "./Input";
import TextArea from "./TextArea";
import { nanoid } from "nanoid";
import { insertCard } from "../../lib/queries";

export default function CreateCardForm(props: { template_id: string }) {
  const { template_id } = props;
  const [formData, setFormData] = useState<CardData>({
    id: nanoid(),
    template_id: template_id,
    sender: "",
    recipient: "",
    message: "",
    giphy_id: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev: CardData) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const isValidSender = formData.sender.trim().length > 0;
    const isValidRecipient = formData.recipient.trim().length > 0;
    const isValidMessage = formData.message.trim().length > 0;

    if (isValidSender && isValidRecipient && isValidMessage) {
      try {
        const { data, error } = await insertCard(formData);

        if (error) {
          console.error("Insert failed:", error.message);
        } else {
          console.log("Insert success:", data);
          // You can redirect or show success here
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    } else {
      console.warn("Form validation failed");
    }
  }

  return (
    <div className="md:w-3/5 w-full h-fit bg-white rounded-2xl p-8 text-black shadow-xl flex flex-col gap-4">
      <Input
        name="sender"
        value={formData.sender}
        type="text"
        label="Sender's name"
        placeholder="Ariana Grande"
        onChange={handleChange}
        required
      />
      <Input
        name="recipient"
        value={formData.recipient}
        type="text"
        label="Recipient's name"
        placeholder="John Doe"
        onChange={handleChange}
        required
      />
      <TextArea
        name="message"
        value={formData.message}
        label="Message"
        placeholder="Happy 100th Birthday!"
        onChange={handleChange}
        rows={4}
        required
      />
      <GiphyPicker />
      <button
        className="bg-black text-white px-12 py-2 rounded-xl mt-4 hover:bg-gray-800 transition w-fit self-end"
        onClick={handleSubmit}
      >
        GENERATE CARD
      </button>
    </div>
  );
}
