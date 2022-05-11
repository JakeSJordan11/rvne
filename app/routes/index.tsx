import { Node, links as nodeLinks } from "~/components/node";

export function links() {
  return [...nodeLinks()];
}

export default function Index() {
  return (
    <>
      <Node.Number />
      <Node.Number />
      <Node.Math />
    </>
  );
}
