import profile_pic from "src/assets/Profile_Pic_23.jpg";
import { AnimatedIcons } from "src/components/AnimatedIcons";

export function Home() {
  return (
    <div
      id="background"
      className="flex h-screen w-screen items-center justify-center bg-[#122B27]"
    >
      <AnimatedIcons />
      <img
        src={profile_pic}
        alt="Profile Pic"
        className="absolute-center h-40 w-40 rounded-[50%] outline outline-8 outline-offset-0 outline-[#239589]"
      />
    </div>
  );
}
