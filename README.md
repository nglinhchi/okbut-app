# OKBUT.io 🦆

> **Ok, but... hear me out.**

## Did I spend way to much time making pixel art ducks? Yes. Did I regret it? No.

Send hilariously interactive cards that are way more fun than your average birthday message. Because why settle for boring when you can make someone feed a hangry duck to unlock your secret message?
**by [chloecodes.io](https://chloecodes.io)**

## What is this madness? 🤔

OKBUT.io lets you create personalized interactive cards for your special people. Whether it's an unhinged inside joke or heartfelt note – we've got templates that'll make your message unforgettable.

Currently featuring:

- **🦆 Hangry Ducky**: Feed the duck or face the quack attack
- **🎫 Peek-A-Boo**: Scratch away panels to reveal a hidden message
- **💻 Terminal Tea**: Hack your way to "decrypt" a secret message

## How to use 📋

### Card Receivers (the fun part):

1. Click the link someone sent you
2. Follow the prompts
3. Unlock the secret message
4. Feel the feels ✨

### Card Creators (the plotting part):

1. Visit [okbut.io](https://okbut.io)
2. Pick a template that matches your chaos level
3. Fill in sender/recipient names and a message (250 chars max – keep it spicy)
4. Pick a GIF that captures the vibe
5. Generate & share the magic link

## Local Development 🛠️

**Clone Repo:**

```bash
git clone https://github.com/nglinhchi/okbut-app.git
cd okbut.io
npm install
cp .env.example .env
npm run dev
```

**API Setup:**

- [Supabase](https://supabase.com): `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY`
- [GIPHY](https://developers.giphy.com): `VITE_GIPHY_API_KEY`

**Test endpoints:**

- [okbut.io](https://okbut.io) - Browse templates
- [okbut.io/create/1](https://okbut.io/create/1) - Create a card
- [okbut.io/view/4HxMpU6GCcLAG-BEetO2U](https://okbut.io/view/4HxMpU6GCcLAG-BEetO2U) - View a card

### Tech Stack

- **FE**: React + TypeScript + TailwindCSS
- **BE**: Supabase
- **GIFs**: GIPHY API
- **Deployment**: Vercel

## License 📄

This project is licensed under the "Do Whatever Makes You Happy" license.
Just don't use it to send mean messages – the duck will find you 🦆
