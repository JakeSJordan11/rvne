import type { ContainerProps } from "./types";
import styles from "./styles.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function Container(props: ContainerProps) {
  return (
    <article data-container ref={props.containerRef}>
      {props.children}
    </article>
  );
}
