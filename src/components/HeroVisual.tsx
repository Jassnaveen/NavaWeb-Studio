import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
}

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let points: Point[] = [];
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initPoints();
    };

    const initPoints = () => {
      points = [];
      const cols = 18;
      const rows = 13;
      const xStep = width / cols;
      const yStep = height / rows;
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * xStep;
          const y = j * yStep;
          points.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);
      time += reduced ? 0 : 0.005;

      // Fine grid lines
      ctx.strokeStyle = 'rgba(58, 58, 59, 0.25)';
      ctx.lineWidth = 0.5;
      const gridSpacing = 40;
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update points with subtle wave + mouse repulsion
      for (const p of points) {
        if (!reduced) {
          const waveX = Math.sin(time + p.baseY * 0.01) * 6;
          const waveY = Math.cos(time + p.baseX * 0.01) * 6;
          p.x = p.baseX + waveX;
          p.y = p.baseY + waveY;

          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 25;
            p.y += (dy / dist) * force * 25;
          }
        }
      }

      // Connection lines between near points
      ctx.lineWidth = 0.5;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 55) {
            const alpha = (1 - dist / 55) * 0.2;
            ctx.strokeStyle = `rgba(168, 168, 170, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      for (const p of points) {
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < 120;

        ctx.beginPath();
        ctx.arc(p.x, p.y, near ? 2 : 1, 0, Math.PI * 2);
        if (near) {
          ctx.fillStyle = `rgba(217, 119, 66, ${0.4 + (1 - dist / 120) * 0.5})`;
        } else {
          ctx.fillStyle = 'rgba(168, 168, 170, 0.35)';
        }
        ctx.fill();
      }

      // Coordinate labels at corners
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillStyle = 'rgba(122, 122, 124, 0.5)';
      ctx.textAlign = 'left';
      ctx.fillText('9.9252°N', 8, 16);
      ctx.fillText('78.1197°E', 8, 28);
      ctx.textAlign = 'right';
      ctx.fillText('NODE_001', width - 8, 16);
      ctx.fillText('ACTIVE', width - 8, 28);
      ctx.textAlign = 'left';

      // Cursor crosshair following mouse
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        ctx.strokeStyle = 'rgba(217, 119, 66, 0.3)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(mx, 0);
        ctx.lineTo(mx, height);
        ctx.moveTo(0, my);
        ctx.lineTo(width, my);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(217, 119, 66, 0.6)';
        ctx.beginPath();
        ctx.arc(mx, my, 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(drawGrid);
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    const handleLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    resize();
    drawGrid();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouse);
    canvas.addEventListener('mouseleave', handleLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouse);
      canvas.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
