import { useCallback, useEffect, useRef, useState } from "react";

export function useDrag() {
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
