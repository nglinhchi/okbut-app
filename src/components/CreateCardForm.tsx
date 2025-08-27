import { useState } from "react";
import type { CardData } from "../../types";
import GiphyPicker from "./GiphyPicker";
import Input from "./Input";
import TextArea from "./TextArea";
import { nanoid } from "nanoid";
import { insertCard } from "../../lib/queries";
import Button from "./Button";

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

  const [isValidFormData, setIsValidFormData] = useState(true);

  const invalidInputMessage = (
    <div className="color-accent">Please fill in all fields correctly.</div>
  );

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
      setIsValidFormData(true);
      try {
        const { data, error } = await insertCard(formData);

        if (error) {
          // TODO show error to user, please try again screen, go to home button.
          console.error("Insert failed:", error.message);
        } else {
          // TODO redirect to share page
          console.log("Insert success:", data);
        }
      } catch (err) {
        // TODO show error to user, please try again screen, go to home button.
        console.error("Unexpected error:", err);
      }
    } else {
      setIsValidFormData(false);
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
      {!isValidFormData && invalidInputMessage}
      <Button onClick={handleSubmit} className="self-end">
        GENERATE CARD
      </Button>
    </div>
  );
}
