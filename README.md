# OKBUT.io 🦆

**by [chloecodes.io](https://chloecodes.io)**

> **Ok, but... hear me out.**

> **Did I spend way to much time making pixel art ducks? Yes I did.**

> **Do I regret it? No I don't.**

## Ok, but... What is this madness? 🤔

> **Send hilariously interactive cards that are way more fun than your average birthday message. Because why settle for boring when you can make someone feed a hangry duck to unlock your secret message? OKBUT.io is your answer to make your special ones feel special.**

Currently featuring:

- **🦆 Hangry Ducky**: Feed the duck or face the quack attack

Coming soon:

- **🎫 Peek-A-Boo**: Scratch away panels to reveal a hidden message
- **💻 Terminal Tea**: Hack your way to "decrypt" a secret message

## Ok, but... How do I use it? 🤔

### Card Senders:

1. Visit [okbut.io](https://okbut.io)
2. Pick a template that matches your chaos level
3. Fill in sender/recipient names and a message
4. Pick a GIF that captures the vibe
5. Generate & share the magic link 🔗

### Card Recipients:

1. Click the link someone sent you
2. Follow the prompts
3. Unlock the secret message
4. Feel the feels ✨

## Ok, but... What if I want to make twists and create my own version? 🤔

**Clone repo:**

```bash
git clone https://github.com/nglinhchi/okbut-app.git
cd okbut.io
npm install
cp .env.example .env
npm run dev
```

**API setup:**

- [Supabase](https://supabase.com): `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY`
- [GIPHY](https://developers.giphy.com): `VITE_GIPHY_API_KEY`

**Test endpoints:**

- [okbut.io](https://okbut.io): Browse templates
- [okbut.io/create/1](https://okbut.io/create/1): Create a card
- [okbut.io/view/4HxMpU6GCcLAG-BEetO2U](https://okbut.io/view/4HxMpU6GCcLAG-BEetO2U): View a card

## Ok, but.. What's the stack like? 🤔

- **FE**: React + TypeScript + TailwindCSS + GIPHY API
- **BE**: Supabase
- **Deployment**: Vercel

## Ok, but... I don't wanna be in trouble 🤔

This project is licensed under the "Do Whatever Makes You Happy" license.
Just don't use it to send mean messages – the duck will find you 🦆
