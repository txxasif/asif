import Link from "next/link";
import Image from "next/image";
export function Header() {
  return (
    <div className="flex bg-primary flex-col sm:flex-row items-center mt-5 justify-between px-5 shadow">
      <Link href="/" className="normal-case text-xl text-white">
        Home
      </Link>
      <div className="flex flex-col sm:flex-row justify-center sm:gap-5 text-white mt-3 sm:mt-0">
        <Link className="hover:text-blue group" href="/about">
          About
          <div className="border border-graydark scale-0 group-hover:scale-100 transition-all duration-100"></div>
        </Link>
        <Link className="hover:text-blue_700 group" href="/project">
          Project
          <div className="border border-graydark scale-0 group-hover:scale-100 transition-all duration-100"></div>
        </Link>
      </div>
      <div className="bg-blue px-4 py-2 rounded text-white font-bold text-sm mt-3 sm:mt-0">
        <Link href={"/cv.pdf"} download={"cv"} target="_blank">
          Download CV
        </Link>
      </div>
    </div>
  );
}
