import { useState } from "react";
import styles from "./styles.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

interface SliderProps {
  onChange: (value: string) => void;
}

export function Slider(props: SliderProps) {
  const [value, setValue] = useState("");

  function handleChange(event: string) {
    props.onChange(event);
    setValue(event);
  }

  console.log(value);
  return (
    <input
      data-slider
      type="range"
      title="slider"
      step="0.1"
      min={0}
      max={10}
      defaultValue={0}
      onChange={(event) => handleChange(event.target.value)}
    />
  );
}
