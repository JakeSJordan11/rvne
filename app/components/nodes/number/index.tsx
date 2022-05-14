import { useState } from "react";
import { NumberInput, links as numberInputLinks } from "~/components/content/number";
import { Slider, links as sliderLinks } from "~/components/content/slider";
import { Title, links as titleLinks } from "~/components/title";
import { useDrag } from "~/hooks/useDrag";
import { Node, links as nodeLinks } from "~/components/nodes";
import styles from "./styles.css";
import { Connector, links as connectorLinks } from "~/components/connectors";

export function links() {
  return [
    ...connectorLinks(),
    ...titleLinks(),
    ...nodeLinks(),
    ...sliderLinks(),
    ...numberInputLinks(),
    { rel: "stylesheet", href: styles },
  ];
}

export function NumberNode() {
  const { titleRef, dragRef } = useDrag();
  const [value, setValue] = useState(0);

  function handleChange(event: number) {
    setValue(event);
  }

  return (
    <Node dragRef={dragRef}>
      <Title value="number" titleRef={titleRef} />
      <NumberInput value={value} />
      <Slider onChange={(event) => handleChange(Number(event))} />
      <Connector.Output />
    </Node>
  );
}
