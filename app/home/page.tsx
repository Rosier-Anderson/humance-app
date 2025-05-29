import PreHeader from "../ui/home/pre-header";
import Image from "next/image";
import HeroImage from "../../public/hero-header.png";

import Header from "../ui/home/header";
import HeroText from "../ui/home/hero-text";
import { DM_SansFont } from "../ui/fonts";

export default function HomePage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className=" flex flex-col mx-auto  bg-neutral-100">
      <PreHeader />
      <div className="relative size-full mx-auto ">
        <Image
          width={1920}
          height={1080}
          src={HeroImage}
          alt="Hero background image"
          className="object-cover rounded-2xl size-full"
          priority
        />

        <Header />
        <HeroText />
      </div>

      <section className="mt-10 w-[70%] mx-auto flex ">
        <div className="border-zinc-200 border rounded-2xl w-32 h-8 flex   justify-center gap-2 p-2  items-center   ">
          <span className="bg-teal-400 rounded-full w-2 h-2 "></span>{" "}
          <span className="whitespace-nowrap text-sm">ABOUT US </span>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="mb-10 px-2 flex justify-center   items-center text-7xl font-semibold flex-wrap ">
            Empowering organizations to thrive through cutting-edge HR
            thecnology{" "}
          </h1>
          <p className={` ${DM_SansFont.className} antialiased `}>
            Where the future of energy is not just a concept it's our mission.
            Born from the vision of <br />
            pionning sustainable world, we are more tham just a company. We
            provide you the best <br />
            service quality with the best rate all the time no matter.
          </p>
        </div>

        {/* <div>
          <article>
            <h1>Plannind and Analytics </h1>
      
            <hr />
            <p>
              Metus torquent platea aenean orci ridiculus potenci feugiat
              ultricies.
            </p>
          </article>
        </div> */}
      </section>
    </div>
  );
}
