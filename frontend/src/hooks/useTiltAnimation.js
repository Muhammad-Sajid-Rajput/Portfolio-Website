import { useState } from "react";

export function useTiltAnimation() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => {
    setRotate({ x: 0, y: 0 });
  };

  return { rotate, handleMouseMove, resetTilt };
}
