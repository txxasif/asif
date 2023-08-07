//import MotionProvider from "@/components/motion-wrapper/wrapper";
import MotionProvider from "@/components/motion-wrapper/wrapper";
import Image from "next/image";
import styles from "@/styles/home.module.css";
import { log } from "console";
export default function Home() {
  return (
    <MotionProvider>
      <main className="box-border mx-auto h-auto flex flex-col sm:flex-row w-screen px-5 pb-5 overflow-hidden">
        <div className="w-full sm:w-1/2 text-white px-3 pt-4 m-auto flex space-y-3 flex-col justify-center">
          <p className=" text-sm font-bold"> Hey There 👋 I am</p>
          <h1 className="font-bold text-5xl leading-10">Md. Amajd Hossain</h1>
          <h2 className="opacity-50">Software Engineer</h2>
          <p className="leading-7">
            {`Welcome to my portfolio! An aspiring programmer with a focus on web
              development. I enjoy working on projects using React and Next.js to
              build modern and dynamic web applications. Join me on my learning
              journey as I delve into the world of web development, and together,
              let's create exciting and innovative solutions!`}
          </p>
        </div>
        <div className="w-full sm:w-1/2  px-3 pt-4 m-auto mt-4 sm:mt-0 ">
          <Image
            className="w-screen"
            src="/images/asif.jpg"
            width={500}
            height={10}
            alt="asif"
          />
        </div>
      </main>
    </MotionProvider>
  );
}
