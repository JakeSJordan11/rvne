import styles from "./styles.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export function Connector() {
  return <button data-connector title="output-connector" type="button" />;
}
