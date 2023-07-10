import Image from "next/image";
import { Fragment } from "react";
const data = [
  {
    title: "Software Development",
    src: "/icons/computer.svg",
    description:
      "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
  },
  {
    title: "Frontend Dev React, NextJS",
    src: "/icons/react.svg",
    description:
      "Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
  },
  {
    title: "Flutter Dev Android, iOS",
    src: "/icons/mobile.svg",
    description:
      "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
  },
];
export default function AboutSection() {
  return (
    <Fragment>
      <div className="w-full  text-white mt-4 flex  items-center justify-center text-7xl ">
        My Expertise
      </div>
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-center">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="mx-auto w-[90vh] sm-w-96 h-60 px-2 border-x-[1.5px] border-y-[3px] text-white border-white flex flex-col items-center justify-center"
            >
              <div>
                <h1>{item.title}</h1>
                <Image
                  className="w-[42px] h-[42px]"
                  src={item.src}
                  width={240}
                  height={280}
                  alt="computer icon"
                />
              </div>
              <h3>{item.description}</h3>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
