import { useState } from "react";
import { useDrag } from "~/hooks/useDrag";
import styles from "./styles.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function MathNode() {
  const { titleRef, nodeRef } = useDrag();
  const [value, setValue] = useState(0);

  return (
    <article ref={nodeRef}>
      <h1 title="math" ref={titleRef} >math</h1>
      <button data-input-1 title="input" type="button" />
      <button data-input-2 title="input" type="button" />
      <select name="operators">
        <option value="addition">addition</option>
        <option value="subtraction">subtraction</option>
        <option value="multiplication">multiplication</option>
        <option value="division">division</option>
      </select>
      <input
        data-type="number"
        type="number"
        title="number"
        min={0}
        max={10}
        step={0.1}
        value={value}
        onChange={event => setValue(Number(event.target.value))}
        readOnly
      />
    </article>
  );
}



export function NumberNode(props: any) {
  const { titleRef, nodeRef } = useDrag();
  const [value, setValue] = useState(0);

  return (
    <article ref={nodeRef}>
      <h1 ref={titleRef} >
        number
      </h1>
      <input
        data-type="number"
        type="number"
        title="number"
        min={0}
        max={10}
        step={0.1}
        value={value}
        readOnly
      />
      <input
        data-type="slider"
        type="range"
        title="slider"
        step="0.1"
        min={0}
        max={10}
        defaultValue={0}
        onChange={(event) => setValue(Number(event.target.value))}
      />
      <button data-output-1 title="output" type="button" ref={props.connectorRef} />
    </article>
  );
}

