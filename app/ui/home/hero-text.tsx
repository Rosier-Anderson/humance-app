import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { DM_SansFont } from "../fonts";

// HeroText component - this is the main call-to-action section of the homepage
export default function HeroText() {
  return (
    <div className="flex flex-col absolute inset-x-0 max-md:bottom-1 min-lg:bottom-35  bottom-2 text-white p-10 gap-6 ml-20">
      <h2 className="font-bold">
        <span className="lg:text-8xl text-5xl tracking-wide">THE FUTURE</span>
        <br />
        <span className="lg:text-9xl text-6xl ">IS BRIGHT</span>
      </h2>

      <div className="flex flex-col items-start justify-center ml-10 gap-6 ">
        <div className="flex items-center justify-center gap-4">
          <hr className="h-6 w-30" />
          <p className={`${DM_SansFont.className} antialiased text-lg`}>
            Clearly define the goals and objectives of your
            <br />
            HR department.
          </p>
        </div>

        <div className="group bg-white hover:bg-teal-400 text-black rounded-lg p-2 ml-34 ">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 cursor-pointer"
            rel="noopener noreferrer"
          >
            <span className="whitespace-nowrap  p-2">Contact us</span>
            <span className="bg-teal-400 group-hover:bg-teal-950 w-11 h-11 rounded-lg flex items-center justify-center">
              <MdArrowOutward className="w-4 h-4 text-[#063137] group-hover:text-white" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
