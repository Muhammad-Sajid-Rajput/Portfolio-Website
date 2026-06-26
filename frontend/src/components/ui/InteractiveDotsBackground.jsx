import { useEffect, useRef } from "react";

const InteractiveDotsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width;
    let height;
    let dots = [];
    let mouse = { x: null, y: null };
    let rafId = null;
    let resizeTimer = null;

    const spacing = window.innerWidth < 768 ? 32 : 22;
    const radius = window.innerWidth < 768 ? 2.2 : 2.4;
    const interactionRadius = 120;

    // Compute dot color once — color never changes at runtime
    const getDotColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--app-outline")
        .trim();
      const [r, g, b] = raw.split(" ").map(Number);
      const alpha = isDark ? 0.62 : 0.56;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    let dotColor = getDotColor();

    // Generate grid dots
    const generateDots = () => {
      dots = [];
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          dots.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0 });
        }
      }
    };

    // Resize canvas — debounced to avoid excessive allocations on fast resize
    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      generateDots();
    };

    const handleResize = () => {
      if (resizeTimer !== null) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeCanvas();
        resizeTimer = null;
      }, 150);
    };

    // Animation loop — dotColor is read from the closed-over variable, not recomputed
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < interactionRadius) {
            const force = (interactionRadius - distance) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            dot.vx += Math.cos(angle) * force * 0.6;
            dot.vy += Math.sin(angle) * force * 0.6;
          }
        }

        // Spring return
        dot.vx += (dot.baseX - dot.x) * 0.02;
        dot.vy += (dot.baseY - dot.y) * 0.02;

        // Friction
        dot.vx *= 0.85;
        dot.vy *= 0.85;

        dot.x += dot.vx;
        dot.y += dot.vy;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });

      rafId = requestAnimationFrame(animate);
    };

    // Mouse events
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Touch events — map touch position to mouse for the repulsion effect
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (resizeTimer !== null) clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10" />
  );
};

export default InteractiveDotsBackground;
