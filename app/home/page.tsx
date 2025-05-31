import Image from "next/image";
import HeroImage from "../../public/hero-header.png";
import PreHeader from "../ui/home/pre-header";
import Header from "../ui/home/header";
import HeroText from "../ui/home/hero-text";

import AboutSection from "../ui/home/AboutSection";
import FeaturesSection from "../ui/home/FeaturesSection";

export default function HomePage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className=" flex flex-col bg-neutral-100">
      <PreHeader />
      <div className="relative h-full w-[95%] mx-auto ">
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
      <AboutSection />
      <FeaturesSection />
    </div>
  );
}
