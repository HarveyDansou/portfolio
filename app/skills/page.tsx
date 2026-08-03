"use client";

import { motion } from "framer-motion";
import skills from "@/data/competences";

import { MdOutlineDesignServices } from "react-icons/md";
import { BsBoundingBox, BsBoxes } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";

const Skills = () => {
  const style = "text-[50px] relative text-accent";
  const icons = [
    <FaCode className={style} />,
    <MdOutlineDesignServices className={style} />,
    <BsBoundingBox className={style} />,
    <BsBoxes className={style} />,
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center pb-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center p-2 lg:p-6 gap-6 group border md:border-0 rounded-md border-accent"
              >
                <span className="flex gap-4">
                  {icons[index]}
                  <h2 className="text-3xl xl:text-4xl font-bold leading-none group-hover:text-accent transition-all duration-500">
                    {skill.title}
                  </h2>
                </span>

                {/** description */}
                <p className="text-primary/70 group-hover:text-primary transition-all duration-500">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
