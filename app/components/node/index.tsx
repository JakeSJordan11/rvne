import { useDrag } from "~/hooks/useDrag";
import { Connector, links as connectorLinks } from "./connectors";
import { Container, links as containerLinks } from "./container";
import { NumberInput, links as numberInputLinks } from "./content/number";
import { Slider, links as sliderLinks } from "./content/slider";
import { Title, links as titleLinks } from "./title";
import styles from "./styles.css";
import { useState } from "react";

export function links() {
  return [
    ...containerLinks(),
    ...titleLinks(),
    ...numberInputLinks(),
    ...sliderLinks(),
    ...connectorLinks(),
    { rel: "stylesheet", href: styles },
  ];
}

export function Node(props: any) {
  return <Container containerRef={props.dragRef}>{props.children}</Container>;
}

export function NumberNode() {
  const { titleRef, dragRef } = useDrag();
  const [value, setValue] = useState(0);

  function handleChange(event: number) {
    setValue(event);
  }

  return (
    <Node dragRef={dragRef}>
      <Connector />
      <Title value="number" titleRef={titleRef} />
      <NumberInput value={value} />
      <Slider onChange={(event) => handleChange(Number(event))} />
    </Node>
  );
}

export function MathNode() {
  const { titleRef, dragRef } = useDrag();

  function handleValue() {
    // get the value from nodes attached to Input
    // and calculate the result based on the slected operator
    return "";
  }

  return (
    <Node dragRef={dragRef}>
      <Title value="math" titleRef={titleRef} />
      <select name="choice" style={{ textAlign: "center" }}>
        <option value="addition">Addition</option>
        <option value="subtraction">Subtraction</option>
        <option value="multiplication">Multiplication</option>
        <option value="division">Division</option>
      </select>
      <NumberInput value={handleValue()} />
    </Node>
  );
}

Node.Math = MathNode;
Node.Number = NumberNode;
