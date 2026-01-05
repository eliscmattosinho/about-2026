import React, { useRef } from "react";
import { useFlashlight } from "@/hooks/useFlashlight";
import "./FlashlightScreen.scss";

const FlashlightScreen: React.FC = () => {
  const { position, handleMouseMove } = useFlashlight();
  const textRef = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    handleMouseMove(e);

    if (!textRef.current) return;

    const rect = textRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    textRef.current.style.setProperty("--mx", `${x}px`);
    textRef.current.style.setProperty("--my", `${y}px`);
  }

  return (
    <div className="flashlight" onMouseMove={handleMove}>
      <div
        className="flashlight__light"
        style={{
          background: `
            radial-gradient(
              circle at ${position.x}px ${position.y}px,
              rgba(252,170,0,1) 0%,
              rgba(252,170,0,0.5) 150px,
              rgba(40,18,4,0.95) 420px
            )
          `,
        }}
      />

      <div ref={textRef} className="flashlight__text">
        Explore
      </div>

      <div className="flashlight__vignette" />
    </div>
  );
};

export default FlashlightScreen;
