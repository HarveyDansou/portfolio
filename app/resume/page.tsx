"use client";

import {
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaJs,
  FaReact,
  FaJava,
  FaAws,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiAndroid,
  SiKotlin,
  SiDotnet,
  SiSqlite,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiUml,
  SiJira,
} from "react-icons/si";
import {} from "react-icons/fa6";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import experience from "@/data/experience";
import education from "@/data/education";
import about from "@/data/about";
import { Button } from "@/components/ui/button";
import { FiDownloadCloud } from "react-icons/fi";
import ResumeBtn from "@/components/ResumeBtn";

// skills data
const skills = {
  icon: "/",
  title: "My skills",
  description:
    "A solid mix of technical and collaborative skills gained through hands-on experience " +
    "in full-stack development, software design, and problem-solving. Here's what I bring to the table.",
  items: [
    [
      {
        icon: <SiDotnet />,
        name: "Dotnet framework",
      },
      {
        icon: <FaJava />,
        name: "java",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css3",
      },
      {
        icon: <SiAndroid />,
        name: "android",
      },
    ],
    [
      {
        icon: <FaDatabase />,
        name: "Sql Server",
      },
      {
        icon: <SiPostgresql />,
        name: "Postgresql",
      },
      {
        icon: <SiOracle />,
        name: "Oracle",
      },
      {
        icon: <SiMysql />,
        name: "Mysql",
      },
      {
        icon: <SiSqlite />,
        name: "Sqlite",
      },
    ],
    [
      {
        icon: <FaAws />,
        name: "Aws",
      },
      {
        icon: <FaGit />,
        name: "Git",
      },
      {
        icon: <SiJira />,
        name: "Jira",
      },
      {
        icon: <FaGithub />,
        name: "Github",
      },
      {
        icon: <SiUml />,
        name: "Uml",
      },
    ],
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] fax items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/** content */}
          <div className="min-h-[70vh] w-full">
            {/** experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-primary/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#dcdcdc] h-[184px] py-6 px-10 rounded-md flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/** dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-primary/70">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-primary/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px] ">
                  <div className="flex flex-col gap-[50px]">
                    {skills.items.map((item, index) => {
                      return (
                        <ul className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 xl:gap-[30px]">
                          {item.map((skill, index) => {
                            return (
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[100px] bg-[#dcdcdc] rounded-xl flex justify-center items-center group">
                                      <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                        {skill.icon}
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">{skill.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                            );
                          })}
                        </ul>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-primary/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#dcdcdc] h-[200px] py-6 px-10 rounded-md flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[70px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <p className="text-primary/70">{item.institution}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-primary/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-primary/60">
                          {item.fieldName}
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
                {/** resume button */}
                <ResumeBtn
                  containerStyles="max-w-40 uppercase flex items-center gap-2 hover:text-white"
                  iconStyles="text-xl"
                />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
