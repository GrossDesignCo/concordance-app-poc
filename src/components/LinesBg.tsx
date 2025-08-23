'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './LinesBg.module.css';

const genBackground = () => {
  // Generate an array of small vertical lines with random lengths and positions
  const lines = [];
  for (let i = 0; i < 100; i++) {
    lines.push({
      x: Math.random(),
      y1: Math.random(),
      length: Math.random() * 20 + 10,
    });
  }
  return lines;
};

const backgroundLines = genBackground();

export const LinesBg = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const bounds = svgRef.current?.getBoundingClientRect();

  const [lines, setLines] = useState<typeof backgroundLines | null>(null);

  useEffect(() => {
    setLines(backgroundLines);
  }, []);

  return (
    <svg
      className={styles.backgroundLines}
      viewBox={`0 0 ${bounds?.width ?? 100} ${bounds?.height ?? 100}`}
      width="100%"
      ref={svgRef}
    >
      {lines &&
        lines.map((line, index) => (
          <line
            key={index}
            x1={line.x * (bounds?.width ?? 100)}
            y1={line.y1 * (bounds?.height ?? 100)}
            x2={line.x * (bounds?.width ?? 100)}
            y2={line.y1 * (bounds?.height ?? 100) + line.length}
            stroke="var(--ds-bg-container-low-contrast)"
            // stroke="currentColor"
            vectorEffect="non-scaling-stroke"
            strokeWidth="1"
          />
        ))}
    </svg>
  );
};
