import { Fragment } from "react";
import Circle from "../icons/circle";

const commitments = [
  "Intégrité",
  "Collaboration",
  "Engagement",
  "Confiance",
  "Responsabilité",
  "Discrétion",
];

const Commitments = () => {
  return (
    <div
      id="commitments"
      className="relative flex min-h-screen flex-col p-7 lg:p-[max(10vw,100px)]"
    >
      <h1 className="text-center text-[7vw] tracking-widest text-[#222B65] lg:text-left lg:text-[3vw] lg:tracking-wider">
        Nos Engagements
      </h1>
      <span className="absolute right-0 hidden w-[100vh] origin-top-right -translate-x-[13vw] -rotate-90 text-[5em] font-light uppercase leading-none opacity-5 lg:block">
        Nos <br /> Engagements
      </span>
      <div className="relative items-center justify-center before:absolute before:left-0 before:hidden before:h-[90%] before:w-[1px] before:bg-black/10 lg:flex lg:flex-1 lg:before:block">
        <div className="hidden h-full py-40 lg:block">
          <ul className="mx-auto grid w-fit grid-cols-3 gap-20 text-[5vw] uppercase lg:text-[1.7vw]">
            {commitments.map((commitment, i) => (
              <li
                className={`${i % 2 === 0 ? "gradient__dark" : "gradient__light"} relative mx-auto w-fit`}
                key={commitment}
              >
                {commitment}
                <Circle className="absolute -right-1/4 -top-full size-20" />
              </li>
            ))}
          </ul>
        </div>
        <div className="gradient__line absolute bottom-10 hidden h-[1px] w-1/2 lg:block"></div>
        <div
          className="relative mx-auto mt-10 w-full border-2 px-10 py-24 shadow shadow-black/10 lg:mt-20 lg:hidden lg:w-1/2 lg:py-32 lg:shadow-2xl"
          style={{
            borderImage:
              "linear-gradient(to bottom right, transparent 50%, rgba(34,43,101,0.3) 100%) 1",
          }}
        >
          <ul className="flex flex-col items-center space-y-7 text-[5vw] uppercase lg:space-y-10 lg:text-[1.5vw]">
            {commitments.map((commitment, i) => (
              <li
                className={`${i % 2 === 0 ? "gradient__dark" : "gradient__light"} w-fit`}
                key={commitment}
              >
                {commitment}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className="mt-10 block text-[10vw] font-light uppercase leading-none opacity-5 lg:hidden">
        Nos <br /> Engagements
      </span>
    </div>
  );
};

export default Commitments;
