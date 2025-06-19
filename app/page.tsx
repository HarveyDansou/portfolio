import { FiDownloadCloud } from "react-icons/fi";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import ResumeBtn from "@/components/ResumeBtn";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/** text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Harvey Dansou</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-primary/80">
              I'm a seasoned Software Developer with a passion for crafting
              clean, scalable, and impactful digital solutions.
            </p>
            {/* <Stats /> */}
            <Stats />
            {/** button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/** resume button */}
              <ResumeBtn
                containerStyles="uppercase flex items-center gap-2 hover:text-white"
                iconStyles="text-xl"
              />
              <div className="mb-8 xl:mb-0">
                <h1 className=""></h1>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="h-9 w-9 border border-accent rounded-full flex justify-center 
                  items-center text-accent text-base hover:bg-accent hover:text-white 
                  hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/** photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
