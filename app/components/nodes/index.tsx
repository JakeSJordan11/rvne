import { links as connectorLinks } from "~/components/connectors";
import { Container, links as containerLinks } from "~/components/container";
import { MathNode, links as mathLinks } from "~/components/nodes/math";
import { NumberNode } from "~/components/nodes/number";
import { links as titleLinks } from "~/components/title";
import { links as numberLinks } from "~/components/content/number";
import { links as sliderLinks } from "~/components/content/slider";
import type { NodeProps } from "./types";

export function links() {
  return [
    ...mathLinks(),
    ...sliderLinks(),
    ...numberLinks(),
    ...titleLinks(),
    ...containerLinks(),
    ...connectorLinks(),
  ];
}

export function Node(props: NodeProps) {
  return (
    <Container containerRef={props.dragRef} {...props}>
      {props.children}
    </Container>
  );
}

Node.Number = NumberNode;
Node.Math = MathNode;
Node.Base = Node;
