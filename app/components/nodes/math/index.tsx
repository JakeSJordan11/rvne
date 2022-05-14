import { NumberInput, links as numberInputLinks } from "~/components/content/number";
import { Title, links as titleLinks } from "~/components/title";
import { useDrag } from "~/hooks/useDrag";
import { Node } from "~/components/nodes";
import { Connector } from "~/components/connectors";
import { useState } from "react";
import styles from "./styles.css";



export function links() {
  return [
    ...numberInputLinks(),
    ...titleLinks(),
    { rel: "stylesheet", href: styles }
  ];
}

export function MathNode() {
  const { titleRef, dragRef } = useDrag();
  const [value, setValue] = useState(0);

  function handleValue() {
    // get the value from nodes attached to Input
    // and calculate the result based on the slected operator
    return value;
  }

  return (
    <Node dragRef={dragRef}>
      <Title value="math" titleRef={titleRef} />
      <Connector.Inputs />
      <select name="operators">
        <option value="addition">addition</option>
        <option value="subtraction">subtraction</option>
        <option value="multiplication">multiplication</option>
        <option value="division">division</option>
      </select>
      <NumberInput onChange={(event) => { setValue(Number(event.currentTarget.value)) }} value={handleValue()} />
    </Node>
  );
}

