import { Node, links as nodeLinks } from "~/components/nodes";

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

