import { cn } from "@/utils/cn";
import Image from "next/image";

type CardProps = {
  src: string;
  alt: string;
  title: string;
  footer: string;
  className?: string;
};

const Card = ({ src, alt, className, title, footer }: CardProps) => {
  return (
    <div className="w-full flex-shrink-0 md:w-auto">
      <div
        className={cn(
          "relative h-[30rem] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/70 before:to-transparent",
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          className="object-cover"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end gap-3 text-white">
          <div className="mb-12 border-b border-white/15 px-5 py-4">
            <h4 className="text-[4vw] capitalize leading-tight lg:text-[1.6vw]">
              {title}
            </h4>
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-[20px] border-b border-l-4 border-[#505EB9]/40 p-4 font-helvetica text-lg font-light text-[#222B65]/70">
        <h1>{footer}</h1>
      </div>
    </div>
  );
};

export default Card;
