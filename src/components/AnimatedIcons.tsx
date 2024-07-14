import { useState } from "react";
import {
  FaAngular,
  FaAws,
  FaCloud,
  FaDatabase,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiOpenai, SiSpring } from "react-icons/si";

export function AnimatedIcons() {
  return (
    <>
      <FaReact
        className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
        style={useRotateAroundCenterStyle()}
      />
      <FaAws
        className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
        style={useRotateAroundCenterStyle()}
      />
      <FaCloud
        className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
        style={useRotateAroundCenterStyle()}
      />
      <FaAngular
        className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
        style={useRotateAroundCenterStyle()}
      />
      <FaPython
        className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
        style={useRotateAroundCenterStyle()}
      />
      <SiOpenai
        className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
        style={useRotateAroundCenterStyle()}
      />
      <FaJava
        className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
        style={useRotateAroundCenterStyle()}
      />
      <SiSpring
        className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
        style={useRotateAroundCenterStyle()}
      />
      <FaDatabase
        className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
        style={useRotateAroundCenterStyle()}
      />
    </>
  );
}

function useRotateAroundCenterStyle(): React.CSSProperties {
  const vmax = Math.max(window.innerWidth, window.innerHeight);

  const r = useRandom(160, vmax / 2 - 50);
  const initialDegree = useRandom(0, 2 * Math.PI);
  const rotationSpeed = useRandom(-1, 1) * 15;
  const movementDirection = useRandom(-1, 1) > 0 ? 1 : -1;
  const movementSpeed = movementDirection * useRandom(200, 600);

  const translateX = `calc(${r}px * cos((var(--angularTicker) + ${initialDegree}rad) * ${movementSpeed} / ${r}))`;
  const translateY = `calc(${r}px * sin((var(--angularTicker) + ${initialDegree}rad) * ${movementSpeed} / ${r}))`;

  return {
    rotate: `calc(var(--angularTicker) * ${rotationSpeed})`,
    translate: `${translateX} ${translateY}`,
  };
}

function useRandom(min: number, max: number) {
  const [random] = useState(() => {
    return min + Math.random() * (max - min);
  });

  return random;
}
