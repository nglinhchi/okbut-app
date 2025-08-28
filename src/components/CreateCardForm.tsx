import { useState } from "react";
import type { CardData } from "../../types";
import GifPicker from "./GifPicker";
import Input from "./Input";
import TextArea from "./TextArea";
import { nanoid } from "nanoid";
import { insertCard } from "../../lib/queries";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function CreateCardForm(props: { templateId: string }) {
  const { templateId: template_id } = props;

  const navigate = useNavigate();

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
    <div className="color-accent">Please fill in all fields correctly D:</div>
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev: CardData) => ({ ...prev, [name]: value }));
  }

  function handleGifChange(giphy_id: string) {
    setFormData((prev: CardData) => ({ ...prev, giphy_id }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const isValidSender = formData.sender.trim().length > 0;
    const isValidRecipient = formData.recipient.trim().length > 0;
    const isValidMessage = formData.message.trim().length > 0;
    const pickedGif = formData.giphy_id.trim().length > 0;

    if (isValidSender && isValidRecipient && isValidMessage && pickedGif) {
      setIsValidFormData(true);
      try {
        const { error } = await insertCard(formData);

        if (error) {
          navigate(`/invalid?code=${error.code}`);
        } else {
          navigate(`/share?card_id=${formData.id}`);
        }
      } catch (err) {
        console.warn(err);
        navigate(`/invalid?code=500`);
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
      <GifPicker onChange={handleGifChange} />
      {!isValidFormData && invalidInputMessage}
      <Button onClick={handleSubmit} className="mt-10 self-end">
        GENERATE CARD
      </Button>
    </div>
  );
}
