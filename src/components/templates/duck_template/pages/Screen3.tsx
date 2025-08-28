export default function Screen3({ onReveal }: { onReveal: () => void }) {
  return <ShortMessage onNext={onReveal} />;
}

// TODO fix this
function ShortMessage({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <p>Yay! The duck is happy now!</p>
      <button onClick={onNext}>Reveal your message</button>
    </div>
  );
}
