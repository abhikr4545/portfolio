
import Image from "next/image";
import Profile from "@/assets/profile.jpeg";
import DownloadResumeButton from "./download-resume";
import { Meteors } from "./ui/meteors";
import { Highlight } from "./ui/highlight";


const HeroSection = () => {
  return (
    <section className="flex-col-reverse flex sm:flex-row sm:h-[calc(100vh-80px)] pt-0 sm:pt-28 overflow-hidden relative">
      <div className="sm:flex-1 px-2 flex flex-col gap-10 mt-24 sm:mt-36">
        <p className="font-bold text-3xl text-center sm:text-5xl sm:text-left">
          Hi, I am <Highlight>Abhishek</Highlight>, <span className="sm:mb-4 block" /> Creative Technologist
        </p>
        <p className="text-center sm:text-left">
          Creative Coder with a focus on user experience design and analytical skills to tackle complex coding challenges
        </p>
        <DownloadResumeButton />
      </div>
      <div className="sm:flex-1 flex justify-end mt-24 relative mx-auto sm:mx-0 overflow-hidden">
        <Image 
          src={Profile}
          className="rounded-full h-[350px] w-[350px]"
          alt="image"
          width={150}
          height={50}
        />
      </div>
      <Meteors number={30} />
    </section>
  )
}

export default HeroSection;