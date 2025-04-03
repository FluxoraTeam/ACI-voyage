import Image from "next/image";
import ScrollToAbout from "./scroll-to-about";

const Hero = () => {
  return (
    <div
      className="relative h-[40rem] min-h-screen bg-cover bg-[right_top] bg-no-repeat before:absolute before:inset-0 before:bg-[#f1e6d7] before:opacity-90"
      style={{ backgroundImage: "url(/images/bg.webp)" }}
    >
      <div className="relative size-full">
        <div className="hero_heading absolute bottom-0 z-50 ms-[max(10vw,100px)] hidden w-fit lg:block">
          <h1 className="relative text-[1.25vw] capitalize italic text-[#4551a0] after:absolute after:-bottom-5 after:left-0 after:h-[1px] after:w-full after:bg-[radial-gradient(circle,#222B6580,#CA181D00)]">
            Le Sur mesure depuis <span className="text-[#640c03]">1998</span>
          </h1>
          <div
            className="hero__plane_logo hidden w-[15vw] opacity-0 lg:block"
            style={{ transform: "translateX(-150%)" }}
          >
            <Image
              src="/images/logo_plane.webp"
              alt="Logo plane"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
        <div className="flex h-full items-center lg:hidden">
          <h1 className="relative text-center text-[10vw] capitalize italic leading-tight after:absolute after:-bottom-5 after:left-0 after:h-[1px] after:w-full after:bg-[radial-gradient(circle,#222B6530,#CA181D00)]">
            <span className="gradient__dark">Le Sur mesure depuis </span>
            <span className="text-[#640c03]">1998</span>
          </h1>
        </div>
        <ScrollToAbout />
      </div>
    </div>
  );
};

export default Hero;
