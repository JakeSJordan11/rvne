import { useDrag } from "~/hooks/useDrag";

export function NumberNode() {
  const { dragRef, titleRef } = useDrag();
  return (
    <article className="flex flex-col border border-black" ref={dragRef} >
      <h2 className="text-xl font-semibold text-center" ref={titleRef}>number</h2>
      <input className="place-self-center text-xl font-bold" type='number' defaultValue={0} min={0} max={10} />
      <input className="" type='range' min={0} max={10} defaultValue={0} />
      <button className="w-4 h-4 bg-white rounded-full border border-black" title='output-connector' />
    </article>
  );
}

export default function Index() {
  return (
    <>
      <NumberNode />
    </>
  );
}

