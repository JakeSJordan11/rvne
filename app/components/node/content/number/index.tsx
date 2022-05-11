import styles from "./styles.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function NumberInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      data-number
      type="number"
      title="number"
      min={0}
      max={10}
      step={0.1}
      value={props.value}
      readOnly
    />
  );
}
