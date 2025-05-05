"use client";

import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  perspective?: number;
  beamSize?: number;
  beamDuration?: number;
  gridColor?: string;
}

export const CustomBackground: React.FC<WarpBackgroundProps> = ({
  children,
  perspective = 750,
  className,
  beamSize = 20,
  beamDuration = 5,
  gridColor = "var(--border)",
  ...props
}) => {
  // Create keyframes for the animation
  React.useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes warpRight {
        0% { background-position: 0% 100%; }
        100% { background-position: 0% 0%; }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);
  return (
    <div
      className={cn("relative rounded bg-primary border p-20", className)}
      {...props}
    >
      <div
        style={
          {
            "--perspective": `${perspective}px`,
            "--grid-color": gridColor,
            "--beam-size": `${beamSize}%`,
            "--beam-duration": `${beamDuration}s`,
          } as React.CSSProperties
        }
        className={
          "pointer-events-none opacity-30 absolute left-0 top-0 size-full overflow-hidden [clipPath:inset(0)] [container-type:size] [perspective:var(--perspective)] [transform-style:preserve-3d]"
        }
      >
        {/* top side */}
        <div
          style={{
            animation: `warpRight ${beamDuration}s linear infinite`,
          }}
          className="absolute z-20 [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_3px,_transparent_3px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_3px,_transparent_3px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]"
        ></div>
        {/* bottom side */}
        <div
          style={{
            animation: `warpRight ${beamDuration}s linear infinite`,
          }}
          className="absolute top-full [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_3px,_transparent_3px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_3px,_transparent_3px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]"
        ></div>
        {/* center side - FIXED: using container relative units */}
        <div className="absolute left-0 top-0 size-full [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_3px,_transparent_3px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_3px,_transparent_3px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [transform:translateZ(-100cqw)] border-2"></div>
        {/* left side */}
        <div
          style={{
            animation: `warpRight ${beamDuration}s linear infinite`,
          }}
          className="absolute left-0 top-0 [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_3px,_transparent_3px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_3px,_transparent_3px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [width:100cqh]"
        ></div>
        {/* right side */}
        <div
          style={{
            animation: `warpRight ${beamDuration}s linear infinite`,
          }}
          className="absolute right-0 top-0 [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_3px,_transparent_3px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_3px,_transparent_3px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)] border-r-3"
        ></div>
      </div>
      <div className="relative flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
};
