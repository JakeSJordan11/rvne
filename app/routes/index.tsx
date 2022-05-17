import { MathNode, NumberNode, links as nodeLinks } from "~/components";

export function links() {
  return [
    ...nodeLinks(),
  ];
};

export default function Index() {
  return (
    <>
      <MathNode />
      <NumberNode />
      <svg height="100vh" width="100vw">
        <path fill="none" stroke="black" strokeWidth={2} />
      </svg>
    </>
  );
}
