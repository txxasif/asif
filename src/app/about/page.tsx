import AboutSection from "@/components/about/about";
import AboutHead from "@/components/about/aboutHead";
import Image from "next/image";
export default function About() {
    return (
        <main className="bg-primary  h-screen py-5 mt-2 px-5 mb-3">


            <AboutHead />

            <AboutSection />
        </main>
    )
}