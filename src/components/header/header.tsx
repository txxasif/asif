import Link from "next/link";
import { Button } from "../ui/button";
export function Header() {
  return (
    <div className="flex  flex-col sm:flex-row items-center mt-5 justify-between px-5 shadow">
      <Link href="/" className="normal-case text-xl">
        Home
      </Link>
      <div className="flex flex-col sm:flex-row justify-center sm:gap-5  mt-3 sm:mt-0">
        <Link className="hover:text-blue group" href="/about">
          About
          <div className="border border-graydark scale-0 group-hover:scale-100 transition-all duration-100"></div>
        </Link>
        <Link className="hover:text-blue_700 group" href="/project">
          Project
          <div className="border border-graydark scale-0 group-hover:scale-100 transition-all duration-100"></div>
        </Link>
      </div>
      <Button>
        <Link href={"/cv.pdf"} download={"cv"} target="_blank">
          Download CV
        </Link>
      </Button>
    </div>
  );
}
