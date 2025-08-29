import type { Template } from "../../types";

// TODO consider use nanoid values for card ids

export const TEMPLATES: Template[] = [
  {
    id: `1`,
    name: `Hangry Ducky`,
    description: `Feed the duck before it throws a tantrum. Choose wisely, only one food unlocks your secret message. The rest? Prepare for a chaotic quack attack.`,
    image_url: `/src/assets/duck.jpg`,
    preview_card_id: `4HxMpU6GCcLAG-BEetO2U`,
    published: true,
  },
  {
    id: `2`,
    name: `Peek-A-Boo`,
    description: `A scratch-to-reveal surprise, just like a glitzy lottery ticket. A sweet message? A scandalous secret? A bold confession? You’re only one scratch away.`,
    image_url: `/src/assets/gradient.webp`,
    preview_card_id: ``,
    published: false,
  },
  {
    id: `3`,
    name: `Terminal Tea`,
    description: `Not an average card, for an average person. Crack a common-sense question to unlock the message. Be wise… or be forever locked out of the tea.`,
    image_url: `/src/assets/terminal.jpg`,
    preview_card_id: ``,
    published: false,
  },
];
