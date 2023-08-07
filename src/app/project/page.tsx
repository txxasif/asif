import ProjectCard from "@/components/projectCard/projectCard";
import Image from "next/image";
import Link from "next/link";
const technologiesNames = ["#React", "#JavaScript", "#HTML", "#CSS"];
export default function Project() {
  return (
    <main className="w-full text-white pb-4 pt-3">
      <div className="flex justify-center items-center  w-full ">
        <h1 className="text-7xl my-2 bg-gradient-to-r from-bubble-gum to-bermuda text-transparent bg-clip-text">
          My Works
        </h1>
      </div>
      <div className="border w-full mb-4 mx-2"></div>

      <ProjectCard />
    </main>
  );
}
