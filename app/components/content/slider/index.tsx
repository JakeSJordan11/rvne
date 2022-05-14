import styles from "./styles.css";
import type { SliderProps } from "./types";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function Slider(props: SliderProps) {

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props;
    const { value } = event.currentTarget;
    return onChange(value);
  }

  return (
    <input
      {...props}
      data-slider
      type="range"
      title="slider"
      step="0.1"
      min={0}
      max={10}
      defaultValue={0}
      onChange={handleOnChange}
    />
  );
}
