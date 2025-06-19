"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Description } from "@radix-ui/react-dialog";
import Link from "next/link";
import { Item } from "@radix-ui/react-select";
import Image from "next/image";
import projects from "@/data/projects";
import { ScrollArea } from "@/components/ui/scroll-area";

const Works = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <ScrollArea className="h-screen">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {projects.map((work, index) => {
              return (
                <li
                  key={index}
                  className="bg-[#dcdcdc] h-[500px] lg:h-[300px] py-6 px-10 rounded-md flex flex-col justify-center items-center lg:items-start gap-1"
                >
                  <div className="w-full flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px]">
                      {/** outline num */}
                      {/* <div className="text-3xl leading-none font-extrabold text-transparent text-outline capitalize">
                        {work.num} {work.category}
                      </div> */}
                      {/** project category */}
                      <h2 className="text-[42px] font-bold leading-none text-primary group-hover:text-accent transition-all duration-500 capitalize">
                        {work.title}
                      </h2>
                      {/** project description */}
                      <p className="text-primary/60">{work.description}</p>
                      {/** stack */}
                      <div className="flex gap-4 text-xl text-accent text-wrap">
                        {work.stack.map((item, index) => {
                          return `${item.name}${
                            index !== work.stack.length - 1 ? ", " : ""
                          }`;
                        })}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default Works;
