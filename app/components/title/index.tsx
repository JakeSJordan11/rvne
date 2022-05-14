import type { TitleProps } from "./types";
import styles from "./styles.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function Title(props: TitleProps) {
  return (
    <h2 ref={props.titleRef}>
      {props.value}
    </h2>
  );
}
