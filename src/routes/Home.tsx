import { Property } from "csstype";
import React, { useEffect, useState } from "react";
import { FaAngular, FaAws, FaCloud, FaPython, FaReact } from "react-icons/fa";
import profile_pic from "src/assets/Profile_Pic_23.jpg";

export function Home() {
  const [degreeTicker, setDegree] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (degreeTicker > 2 * Math.PI) {
        setDegree(degreeTicker - 2 * Math.PI);
      }

      setDegree(degreeTicker + Math.PI / 180 / 10);
    }, 20);

    return () => clearInterval(interval);
  }, [degreeTicker]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#122B27]">
      <div className="h-40 w-40">
        <FaReact
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(degreeTicker)}
        />
        <FaAws
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(degreeTicker)}
        />
        <FaCloud
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(degreeTicker)}
        />
        <FaAngular
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(degreeTicker)}
        />
        <FaPython
          className="absolute-center scale-[3] text-[#239589] drop-shadow-[0_0_2px_black]"
          style={useRotateAroundCenterStyle(degreeTicker)}
        />

        <img
          src={profile_pic}
          alt="Profile Pic"
          className="absolute-center h-40 w-40 rounded-[50%] outline outline-8 outline-offset-4 outline-[#2A5279]"
        />
      </div>
    </div>
  );
}

function useRotateAroundCenterStyle(degree: number): React.CSSProperties {
  const r = useRandom(6, 40);
  const initialDegree = useRandom(0, 2 * Math.PI);
  const rotationSpeed = useRandom(1, 25);
  const movementSpeed = useRandom(50, 100);

  return {
    rotate: `${degree * rotationSpeed}rad`,
    translate: getCSSTranslateProperty(
      r,
      ((degree + initialDegree) * movementSpeed) / r,
      "vmax",
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
