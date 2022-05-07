import { useCallback, useEffect, useRef, useState } from "react";



function useDrag() {
  const isDragging = useRef(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onPointerDown = useCallback(event => {
    if (dragRef.current && titleRef.current && titleRef.current.contains(event.target)) {
      isDragging.current = true;
      setShift({ x: event.clientX - dragRef.current.getBoundingClientRect().left, y: event.clientY - dragRef.current.getBoundingClientRect().top });
    }
  }, []);

  const onPointerUp = useCallback(() => {
    if (dragRef.current) {
      dragRef.current.style.cursor = "grab";
    }
    if (isDragging.current) {
      isDragging.current = false;
    }
  }, []);

  const onPointerMove = useCallback(event => {
    if (isDragging.current) {
      setPosition({ x: event.clientX - shift.x, y: event.clientY - shift.y });
    }
  }, [shift]);

  useEffect(() => {
    if (dragRef.current) {
      dragRef.current.style.cursor = isDragging.current ? "grabbing" : "grab";
      dragRef.current.style.position = "absolute";
      dragRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointermove", onPointerMove);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointermove", onPointerMove);
    }
  }, [onPointerDown, onPointerUp, onPointerMove, position]);

  return { dragRef, titleRef };
}


export default function Index() {
  const { dragRef, titleRef } = useDrag();

  return (
    <main style={{ display: 'grid', fontFamily: "system-ui, sans-serif", lineHeight: "1.4", height: '100vh', width: '100vw' }}>

      <article style={{ display: 'flex', flexDirection: 'column', border: '2px solid', position: 'absolute' }} ref={dragRef} >
        <h2 style={{ userSelect: 'none', textAlign: 'center', margin: '0', padding: '8px 0px' }} ref={titleRef}>number</h2>
        <input style={{ border: 'none', fontSize: 'xx-large', outline: 'none', textAlign: 'center', padding: '0px 18px 0px 24px' }} type='number' defaultValue={0} min={0} max={10} />
        <input style={{ outline: 'none', maxWidth: '75%', placeSelf: 'center', padding: '4px 0px' }} type='range' min={0} max={10} defaultValue={0} />
        <button style={{ position: 'absolute', left: '95%', padding: '4%', bottom: '38%', borderRadius: '50%' }} title='output-connector' />
      </article>

    </main >
  );
}

