import Image from "next/image";
import { Fragment } from "react";
const data = [
  {
    title: "Programming Languages",
    src: "/icons/computer.svg",
    description:
      "I have a strong knowledge of C, C++, Java, JavaScript, and TypeScript. I also have a strong understanding of Object-Oriented Programming (OOP) and Functional programming languages.",
  },
  {
    title: "Frontend Dev React, NextJS",
    src: "/icons/react.svg",
    description:
      "Enthusiastic about app development with proficiency in HTML, CSS, and JavaScript. Familiar with building applications using React and Next.js frameworks..",
  },
  {
    title: "ReactNative Android, iOS",
    src: "/icons/mobile.svg",
    description:
      "Familiar with developing hybrid mobile apps and cross-platform solutions using the ReactNative framework.",
  },
];
export default function AboutSection() {
  return (
    <Fragment>
      <div className="w-full   text-white mt-4 flex  items-center justify-center text-7xl ">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from  from-bubble-gum to-bermuda my-3">
          My Expertise
        </h1>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="mx-auto sm:w-96 h-60 px-2 border-x-[1.5px] border-y-[3px] text-white border-white flex flex-col items-center justify-center"
            >
              <div>
                <div className="flex font-bold text-[26px] flex-col items-center justify-center my-1">
                  <h1>{item.title}</h1>
                  <Image
                    className="w-[42px] h-[42px] my-2"
                    src={item.src}
                    width={240}
                    height={280}
                    alt="computer icon"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <h3>{item.description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
