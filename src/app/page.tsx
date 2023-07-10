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
          <h1 className="font-bold text-5xl leading-10">Anisur Rahman</h1>
          <h2 className="opacity-50">Mechanical Engineer</h2>
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            interdum consequat convallis. Contact Me
          </p>
          <div className="flex mt-5 text-white">
            <a href="#" className=" hover:text-blue_700">
              Twitter
            </a>
            <a href="#" className=" hover:text-blue_700 mx-3">
              LinkedIn
            </a>
            <a href="#" className=" hover:text-blue_700 mx-3">
              Facebook
            </a>
          </div>
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
