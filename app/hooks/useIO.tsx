import { useCallback, useEffect, useRef, useState } from "react";

export function useIO() {
  const isDragging = useRef(false);
  const pathRef = useRef<SVGPathElement>(null);
  const connectorRef = useRef<HTMLButtonElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onPointerDown = useCallback((event) => {
    if (connectorRef.current && connectorRef.current.contains(event.target)) {
      isDragging.current = true;
      connectorRef.current.style.backgroundColor = "red";
    }
  }, []);


  const onPointerUp = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
    }
  }, []);


  const onPointerMove = useCallback(
    (event) => {
      if (isDragging.current) {
        setPosition({ x: event.clientX, y: event.clientY });
      }
    },
    []
  );

  useEffect(() => {
    if (isDragging.current && pathRef.current) {
      pathRef.current.setAttribute('d', `M 0 0 L ${position.x} ${position.y}`)
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

  return { pathRef, connectorRef };
}
