import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function AboutHead() {
  return (
    <Fragment>
      <div className="bg-primary font-sans w-full flex flex-row  items-center mt-20">
        <div className="card w-96 mx-auto bg-primary border-white border-y-[3px] border-x-[1.5px]  shadow-md  ">
          <Image
            className="w-32 mx-auto rounded-full -mt-20 border-8 border-white shadow-md"
            width={200}
            height={30}
            src="/images/asif.jpg"
            alt=""
          />
          <div className="text-white text-center mt-2 text-3xl font-medium">
            Amzad Hosen (Asif)
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-2 text-white mt-3 opacity-90 flex  items-start">
              <Image
                src="/icons/location.svg"
                width={12}
                height={4}
                className="w-12 h-4 -fas fa-briefcase mr-2 text-lg"
                alt=""
              />
              Dhaka, Bangladesh
            </div>
            {/* 
                        <div className="mb-2 text-white mt-2 opacity-50 flex  items-center">
                            <Image  src="/icons/work.svg" width={12} height={4} alt="" className="fas w-12 h-4 fa-briefcase mr-2 text-lg text-blueGray-400" />
                            (not working)
                        </div> */}

            <div className="mb-2 text-white mt-2 opacity-90 flex items-center ">
              <Image
                src="/icons/school.svg"
                width={12}
                height={4}
                alt=""
                className=" w-12 h-4 fas fa-university mr-2 text-lg text-blueGray-400"
              />
              Daffodil International University
            </div>

            <div className="mb-2 text-white mt-2 opacity-90 flex items-center ">
              <Image
                src="/icons/github.svg"
                width={12}
                height={4}
                alt=""
                className=" w-12 h-4 fas fa-university mr-2 text-lg text-blueGray-400"
              />
              <Link href="https://github.com/txxasif" target="_blank">
                https://github.com/txxasif
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
