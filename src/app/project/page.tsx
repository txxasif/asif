import Image from "next/image";
import Link from "next/link";
const technologiesNames = ["#React", "#JavaScript", "#HTML", "#CSS"];
export default function Project() {
  return (
    <main className="w-full text-white">
      <div className="flex justify-center items-center  w-full ">
        <h1 className="text-7xl my-2">My Works</h1>
      </div>
      <div className="px-7 w-full flex items-center justify-center">
        <div className="w-96  shadow-lg">
          <Image
            alt="algorithm visualisation"
            src="/images/algo/algo4.png"
            className="h-60 rounded-t-2xl w-96"
            width={300}
            height={300}
          />
          <div className="bg-[#201F23] py-3 px-2">
            <h5 className="text-xl font-bold ">Algortihm Visualization</h5>
            <p className="text-sm opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores ab quod minus excepturi vel veritatis natus maxime
              officia eligendi voluptatibus recusandae illum dignissimos, velit
              dolorum exercitationem blanditiis! Repellendus, obcaecati
              doloribus.
            </p>
            <div className="flex flex-row gap-4 text-white py-2 text-[13px] ">
              {technologiesNames.map((techno) => {
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
            <div className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
              <Image
                src="/icons/arrow.svg"
                width={16}
                height={16}
                alt="icons"
                className="mr-2"
              />
              <Link href="https://txxasif.github.io/Monster/" target="_blank">
                Live Demo
              </Link>
            </div>
            <div className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
              <Image
                src="/icons/github.svg"
                width={16}
                height={16}
                alt="icons"
                className="mr-2"
              />
              <Link href="https://github.com/txxasif/AlgoVisu" target="_blank">
                Code Link
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
