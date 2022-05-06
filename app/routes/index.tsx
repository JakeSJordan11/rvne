import { useCallback, useEffect, useRef, useState } from "react";

export default function Index() {
  const isDragging = useRef(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shift, setShift] = useState({ x: 0, y: 0 });

  const onPointerDown = useCallback(event => {
    if (dragRef.current && dragRef.current.contains(event.target)) {
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

  return (
    <main style={{ display: 'grid', fontFamily: "system-ui, sans-serif", lineHeight: "1.4", height: '100vh', width: '100vw' }}>
      <div
        ref={dragRef}
        style={{ borderStyle: 'solid', height: '100px', width: '100px' }} />
    </main>
  );
}
