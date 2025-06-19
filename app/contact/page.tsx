"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FaPhone,
  FaRegEnvelope,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1(431)668-1010",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hairvey.dansou@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Winnipeg, Manitoba, Canada.",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/** form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#dcdcdc] rounded-md">
              <h3 className="text-4xl text-accent">
                Let's build something great together!
              </h3>
              <p className="text-primary/60">
                Have a question, a project in mind, or just want to connect? I'd
                love to hear from you! Feel free to reach out using the form
                below or via email. I'll get back to you as soon as possible.
              </p>
              {/** input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firsname" placeholder="Firstname" />
                <Input type="lasname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/** textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/** button */}
              <Button className="max-w-40">Send message</Button>
            </form>
          </div>
          {/** info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-transparent text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
