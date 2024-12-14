import Facebook from "../icons/facebook";
import House from "../icons/house";
import Instagram from "../icons/instagram";
import Linkedin from "../icons/linkedin";
import Mail from "../icons/mail";
import Phone from "../icons/phone";
import Form from "./form";
import Social from "./social";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="relative min-h-screen bg-cover bg-[right_top] bg-no-repeat py-20 before:absolute before:inset-0 before:bg-[#f1e6d7] before:opacity-90"
        style={{ backgroundImage: "url(/images/bg.webp)" }}
      >
        <Form />
      </div>
      <div>
        {/* <div className="mx-auto my-20 grid w-[90%] grid-cols-2 gap-3 lg:w-1/2 lg:grid-cols-3 lg:gap-0 lg:border lg:[borderImage:linear-gradient(to_top,transparent_50%,rgba(0,0,0,0.3)_100%)_1]">
          <div className="flex h-64 flex-col justify-between border p-4 shadow-lg shadow-black/5 [borderImage:linear-gradient(to_top,transparent_50%,rgba(80,94,185,0.7)_100%)_1] lg:border-none">
            <div className="flex flex-col gap-4">
              <Phone />
              <span className="gradient__dark text-xl font-light">
                Téléphone :
              </span>
            </div>
            <span className="text-xl font-light text-[#505EB9]/70">
              +33 1 40 21 11 10
            </span>
          </div>
          <div
            className="border p-4 shadow-lg shadow-black/5 lg:h-96"
            style={{
              borderImage:
                "linear-gradient(to top, transparent 50%, rgba(80,94,185,0.7) 100%) 1",
            }}
          >
            <House />
            <span className="gradient__dark mb-7 mt-4 block text-xl font-light">
              Adresse :
            </span>
            <span className="text-xl font-light text-[#505EB9]/70">
              75 Avenue Parmentier 75011 Paris, France
            </span>
          </div>
          <div className="col-span-2 flex h-52 flex-col justify-between border p-4 shadow-lg shadow-black/5 [borderImage:linear-gradient(to_top,transparent_50%,rgba(80,94,185,0.7)_100%)_1] lg:col-span-1 lg:h-64 lg:border-none">
            <div className="flex flex-col gap-4">
              <Mail />
              <span className="gradient__dark text-xl font-light">
                E-mail :
              </span>
            </div>
            <span className="text-,d font-light text-[#505EB9]/70">
              events@acivoyage.com
            </span>
          </div>
        </div> */}

        <div className="mx-auto my-40 hidden justify-center lg:flex">
          <div className="relative z-20 flex size-64 flex-col items-center justify-center gap-10 rounded-full border border-transparent p-4 [background:linear-gradient(#F1E6D7,#F1E6D7)_padding-box,linear-gradient(to_top_right,#77777700,#505EB9B2)_border-box]">
            <div className="flex flex-col items-center gap-4">
              <Phone />
              <span className="gradient__dark text-xl font-light">
                Téléphone :
              </span>
            </div>
            <span className="text-xl font-light text-[#505EB9]/70">
              +33 1 40 21 11 10
            </span>
          </div>
          <div className="relative z-10 flex size-64 -translate-x-7 flex-col items-center justify-center gap-10 rounded-full border border-transparent p-4 [background:linear-gradient(#F1E6D7,#F1E6D7)_padding-box,linear-gradient(to_top_right,#77777700,#505EB9B2)_border-box]">
            <div className="flex flex-col items-center gap-4">
              <Mail />
              <span className="gradient__dark text-xl font-light">
                E-mail :
              </span>
            </div>
            <span className="text-,d font-light text-[#505EB9]/70">
              events@acivoyage.com
            </span>
          </div>
          <div className="flex size-64 -translate-x-14 flex-col items-center justify-center rounded-full border border-transparent p-4 [background:linear-gradient(#F1E6D7,#F1E6D7)_padding-box,linear-gradient(to_top_right,#77777700,#505EB9B2)_border-box]">
            <House />
            <div className="flex flex-col">
              <span className="gradient__dark mb-7 mt-4 block text-center text-xl font-light">
                Adresse :
              </span>
              <span className="max-w-32 text-center text-xl font-light text-[#505EB9]/70">
                75 Avenue Parmentier 75011 Paris, France
              </span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto my-40 flex flex-wrap-reverse justify-center lg:hidden">
          <div className="relative">
            <div className="absolute -bottom-[60%] left-1/2 z-10 flex size-48 -translate-x-1/2 flex-col items-center justify-center gap-10 rounded-full border border-transparent p-4 [background:linear-gradient(#F1E6D7,#F1E6D7)_padding-box,linear-gradient(to_top_right,#77777700,#505EB9B2)_border-box]">
              <div className="flex flex-col items-center gap-4">
                <Phone />
                <span className="gradient__dark text-xl font-light">
                  Téléphone :
                </span>
              </div>
              <span className="text-xl font-light text-[#505EB9]/70">
                +33 1 40 21 11 10
              </span>
            </div>
            <div className="absolute -right-[28%] top-14 z-20 flex size-52 flex-col items-center justify-center gap-3 rounded-full border border-transparent p-4 [background:linear-gradient(#F1E6D7,#F1E6D7)_padding-box,linear-gradient(to_top_right,#77777700,#505EB9B2)_border-box]">
              <div className="flex flex-col items-center gap-4">
                <Mail />
                <span className="gradient__dark text-xl font-light">
                  E-mail :
                </span>
              </div>
              <span className="text-md font-light text-[#505EB9]/70">
                events@acivoyage.com
              </span>
            </div>
            <div className="flex size-64 -translate-x-20 flex-col items-center justify-center rounded-full border border-transparent p-4 [background:linear-gradient(#F1E6D7,#F1E6D7)_padding-box,linear-gradient(to_top_right,#77777700,#505EB9B2)_border-box]">
              <House />
              <div className="flex flex-col">
                <span className="gradient__dark mb-7 mt-4 block text-center text-xl font-light">
                  Adresse :
                </span>
                <span className="max-w-32 text-center text-xl font-light text-[#505EB9]/70">
                  75 Avenue Parmentier 75011 Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-center gap-7 py-10 lg:flex">
          <Social>
            <Instagram />
          </Social>
          <Social>
            <Linkedin />
          </Social>
          <Social>
            <Facebook />
          </Social>
        </div>
      </div>
    </>
  );
};

export default Contact;
