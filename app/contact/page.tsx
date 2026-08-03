"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail, sendNotif } from "@/service/mailapi";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 (431)668-1010",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hairvey.dansou@gmail.com",
  },
  {
    icon: <FaLocationDot />,
    title: "Address",
    description: "Winnipeg, Manitoba, Canada.",
  },
];

const schema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.string().min(8),
  phone: z.string(),
  message: z.string().min(2),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitHandler = async (values: FieldValues) => {
    try {
      await sendMail(values);
      await sendNotif(values);
      reset();
    } catch (error) {
      console.log("Error " + error);
    }
  };

  const style = "h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-accent";
  const icons = [
    <FaPhoneAlt className={style} />,
    <FaEnvelope className={style} />,
    <FaLocationDot className={style} />,
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/** form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="flex flex-col gap-6 p-5 md:p-10 bg-[#dcdcdc] rounded-md"
            >
              <h3 className="text-2xl md:text-4xl text-accent">
                Let's build something great together!
              </h3>
              <p className="text-primary/70">
                Have a question, a project in mind, or just want to connect? I'd
                love to hear from you! Feel free to reach out using the form
                below or via email. I'll get back to you as soon as possible.
              </p>
              {/** input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  {...register("firstname")}
                  type="firstname"
                  placeholder="Firstname"
                  className={`${
                    errors.firstname && "border-2 border-red-600 text-red-600"
                  }`}
                />

                <Input
                  {...register("lastname")}
                  type="lastname"
                  placeholder="Lastname"
                  className={`${
                    errors.lastname && "border-2 border-red-600 text-red-600"
                  }`}
                />
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Email address"
                  className={`${
                    errors.email && "border-2 border-red-600 text-red-600"
                  }`}
                />
                <Input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone number"
                />
              </div>
              {/** textarea */}
              <Textarea
                {...register("message")}
                placeholder="Type your message here."
                className={`h-[200px] ${
                  errors.message && "border-2 border-red-600 text-red-600"
                }`}
              />
              {/** button */}
              <Button disabled={!isValid || isSubmitting} className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/** info */}
          <div className="flex-1 flex flex-col gap-8 md:gap-15 items-center justify-center order-1 xl:order-none mb-8 md:mb-10">
            <h2 className="text-3xl md:text-5xl text-accent font-bold">
              Let's talk!
            </h2>
            <ul className="flex flex-col gap-5 md:gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-3 md:gap-6">
                    <div className="bg-transparent text-accent">
                      {icons[index]}
                    </div>
                    <h3 className="md:text-xl font-semibold md:font-normal">
                      {item.description}
                    </h3>
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
