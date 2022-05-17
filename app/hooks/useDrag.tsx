import { useCallback, useEffect, useRef, useState } from "react";

export function useDrag() {
  const isDragging = useRef(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [shift, setShift] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onPointerDown = useCallback((event) => {
    if (
      nodeRef.current &&
      titleRef.current &&
      titleRef.current.contains(event.target)
    ) {
      isDragging.current = true;
      setShift({
        x: event.clientX - nodeRef.current.getBoundingClientRect().left,
        y: event.clientY - nodeRef.current.getBoundingClientRect().top,
      });
    }
  }, []);

  const onPointerUp = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
    }
    if (nodeRef.current) {
      nodeRef.current.style.zIndex = "0";
    }
  }, []);

  const onPointerMove = useCallback(
    (event) => {
      if (isDragging.current) {
        setPosition({ x: event.clientX - shift.x, y: event.clientY - shift.y });
      }
    },
    [shift]
  );

  useEffect(() => {
    if (nodeRef.current) {
      nodeRef.current.style.zIndex = "1";
      nodeRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointermove", onPointerMove);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, [onPointerDown, onPointerUp, onPointerMove, position]);

  return { nodeRef, titleRef };
}
