import { useState } from "react";

interface Position {
  x: number;
  y: number;
}

export function useFlashlight() {
  const [position, setPosition] = useState<Position>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return {
    position,
    handleMouseMove,
  };
}
