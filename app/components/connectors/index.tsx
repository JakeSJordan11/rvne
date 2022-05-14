import type { ConnectorProps } from "./types";
import styles from "./styles.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function Connector(props: ConnectorProps) {
  return <button  {...props} />
}

export function Input(props: ConnectorProps) {
  return <button data-input {...props} />
}

export function Inputs(props: ConnectorProps) {
  switch (props.amount) {
    case 3:
      return (
        <>
          <button data-input  {...props} />
          <button data-input style={{ top: '50%' }} {...props} />
          <button data-input style={{ top: '75%' }} {...props} />
        </>
      )
    default:
      return (
        <>
          <button data-input  {...props} />
          <button data-input style={{ top: '50%' }} {...props} />
        </>
      )
  }
}

export function Output(props: ConnectorProps) {
  return <button data-output {...props} />
}

export function Outputs(props: ConnectorProps) {
  switch (props.amount) {
    case 1:
      return <button data-output  {...props} />
    case 2:
      return (
        <>
          <button data-output  {...props} />
          <button data-output style={{ top: '75%' }} {...props} />
        </>
      )
    default:
      return <button data-output  {...props} />
  }
}

Connector.Output = Output;
Connector.Outputs = Outputs;
Connector.Input = Input;
Connector.Inputs = Inputs;
