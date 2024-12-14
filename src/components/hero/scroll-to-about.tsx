"use client";

import { useLenis } from "lenis/react";
import Image from "next/image";
import DownArrow from "../icons/down-arrow";

const ScrollToAbout = () => {
  const lenis = useLenis();
  return (
    <>
      <button
        onClick={() => lenis?.scrollTo("#about")}
        className="absolute bottom-0 right-0 m-[5vw] hidden w-[11vw] animate-pulse cursor-pointer lg:block"
      >
        <Image
          src={"/icons/scroll.webp"}
          alt="Scroll down"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </button>
      <button
        onClick={() => lenis?.scrollTo("#about")}
        className="absolute bottom-0 left-1/2 mb-16 w-[30vw] -translate-x-1/2 animate-pulse cursor-pointer lg:hidden"
      >
        <DownArrow />
      </button>
    </>
  );
};

export default ScrollToAbout;
