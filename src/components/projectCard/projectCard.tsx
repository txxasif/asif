import { projectDetails } from "@/app/project/projectDetails";
import Image from "next/image";
import Link from "next/link";
export default function ProjectCard() {
  return (
    <div className="w-full px-7 gap-y-10 gap-x-11 flex flex-wrap  justify-center items-center ">
      {projectDetails.map((project) => {
        return (
          <div className="w-96 shadow-lg " key={project.name}>
            <Image
              alt="algorithm visualisation"
              src={project.imageSrc}
              className="h-60 rounded-t-2xl  w-96"
              width={500}
              height={500}
            />
            <div className="bg-[#201F23]  py-3 px-2">
              <h5 className="text-xl font-bold ">{project.name}</h5>
              <p className="text-sm pt-2 opacity-70">{project.description}</p>
              <div className="flex flex-wrap gap-4 text-white py-4 text-[13px] ">
                {project.technologies.map((techno) => {
                  return (
                    <div
                      key={techno}
                      className="bg-[#050708] px-2 py-1 rounded-md"
                    >
                      <p>{techno}</p>
                    </div>
                  );
                })}
              </div>
              {project.liveDemo ? (
                <div className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                  <Image
                    src="/icons/arrow.svg"
                    width={16}
                    height={16}
                    alt="icons"
                    className="mr-2"
                  />
                  <Link href={project.liveLink} target="_blank">
                    Live Demo
                  </Link>
                </div>
              ) : null}
              <div className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                <Image
                  src="/icons/github.svg"
                  width={16}
                  height={16}
                  alt="icons"
                  className="mr-2"
                />
                <Link href={project.codeLink} target="_blank">
                  Code Link
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
