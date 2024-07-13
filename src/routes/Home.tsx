import { Property } from "csstype";
import React, { useEffect, useState } from "react";
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
import profile_pic from "src/assets/Profile_Pic_23.jpg";

export function Home() {
  const [ticker, setRotationTicker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ticker > 2 * Math.PI) {
        setRotationTicker(ticker - 2 * Math.PI);
      }

      setRotationTicker(ticker + Math.PI / 180 / 10);
    }, 10);

    return () => clearInterval(interval);
  }, [ticker]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#122B27]">
      <div className="h-40 w-40">
        <FaReact
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(ticker)}
        />
        <FaAws
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(ticker)}
        />
        <FaCloud
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(ticker)}
        />
        <FaAngular
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(ticker)}
        />
        <FaPython
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(ticker)}
        />
        <SiOpenai
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(ticker)}
        />
        <FaJava
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(ticker)}
        />
        <SiSpring
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(ticker)}
        />
        <FaDatabase
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(ticker)}
        />
        <img
          src={profile_pic}
          alt="Profile Pic"
          className="absolute-center h-40 w-40 rounded-[50%] outline outline-8 outline-offset-0 outline-[#239589]"
        />
      </div>
    </div>
  );
}

function useRotateAroundCenterStyle(ticker: number): React.CSSProperties {
  const vmax = Math.max(window.innerWidth, window.innerHeight);

  const r = useRandom(160, vmax / 2 - 50);
  const initialDegree = useRandom(0, 2 * Math.PI);
  const rotationSpeed = useRandom(-1, 1) * 15;
  const movementDirection = useRandom(-1, 1) > 0 ? 1 : -1;
  const movementSpeed = movementDirection * useRandom(200, 600);

  return {
    rotate: `${ticker * rotationSpeed}rad`,
    translate: getCSSTranslateProperty(
      r,
      ((ticker + initialDegree) * movementSpeed) / r,
      "px",
    ),
  };
}

function useRandom(min: number, max: number) {
  const [random] = useState(() => {
    return min + Math.random() * (max - min);
  });

  return random;
}

function getCSSTranslateProperty(
  r: number,
  degree: number,
  unit: string,
): Property.Translate {
  const x = r * Math.cos(degree);
  const y = r * Math.sin(degree);

  return `${x}${unit} ${y}${unit}`;
}
