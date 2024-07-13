import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import profile_pic from "src/assets/Profile_Pic_23.jpg";

export function Home() {
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDegree(degree + 0.1);
    }, 20);

    return () => clearInterval(interval);
  }, [degree]);

  const r = 10;
  const x = r * Math.cos((degree * Math.PI) / 180);
  const y = r * Math.sin((degree * Math.PI) / 180);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#122B27]">
      <div className="h-40 w-40">
        <FaReact
          className="absolute-center scale-[3]"
          style={{
            rotate: `${degree}deg`,
            translate: `${x}rem ${y}rem`,
          }}
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
