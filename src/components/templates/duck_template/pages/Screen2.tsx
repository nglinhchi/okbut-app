export default function Screen2({
  onFedCorrectly,
}: {
  onFedCorrectly: () => void;
}) {
  return <FeedingStage onSuccess={onFedCorrectly} />;
}

// TODO fix this
function FeedingStage({ onSuccess }: { onSuccess: () => void }) {
  return <button onClick={onSuccess}>Feed the duck</button>;
}
