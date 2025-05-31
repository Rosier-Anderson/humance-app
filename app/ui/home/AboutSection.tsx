// components/home/AboutSection.tsx

import { DM_SansFont } from "../fonts";

export default function AboutSection() {
  return (
    <section className="mt-10 max-w-[90%]  maxero-lg:w-[90%] mx-auto flex ">
      <div className="border-zinc-200 border rounded-2xl w-32 h-8 flex   justify-center gap-2 p-2  items-center   ">
        <span className="bg-teal-400 rounded-full w-2 h-2 "></span>{" "}
        <span className="whitespace-nowrap text-sm">ABOUT US </span>
      </div>
      <div className="flex flex-col gap-4 ">
        <h1 className="mb-10 px-2 flex justify-center   items-center text-3xl md:text-5xl lg:text-7xl font-stretch-extra-condensed flex-wrap ">
          Empowering organizations to thrive through cutting-edge HR thecnology{" "}
        </h1>
        <p
          className={` ${DM_SansFont.className} antialiased text-gray-600 text-sm `}
        >
          Where the future of energy is not just a concept it's our mission.
          Born from the vision of <br />
          pionning sustainable world, we are more tham just a company. We
          provide you the best <br />
          service quality with the best rate all the time no matter.
        </p>
      </div>
    </section>
  );
}
