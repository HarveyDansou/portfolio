"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 10,
    text: "Years of experience",
  },
  {
    num: 20,
    text: "Projects completed",
  },
  //   {
  //     num: 4,
  //     text: "Fields of expertise",
  //   },
  //   {
  //     num: 6,
  //     text: "Technologies mastered",
  //   },
];

const Stats = () => {
  return (
    <section className="pt-1 pb-1 mb-8 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex-wrap gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-primary/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
