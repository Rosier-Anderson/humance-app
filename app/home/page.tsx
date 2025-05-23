// This is a React component that serves as the home page of a web application.
import PreHeader from "../ui/home/pre-header";
import Image from "next/image";
import Logo from "../../public/logo.svg";
// Importing the logo image
import HeroImage from "../../public/hero-header.png";
import MenuLinks from "../ui/home/header-nav-links";
export default function HomePage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-screen h-screen bg-neutral-100 ">
      <main className="  w-[96%] h-[96%] flex flex-col  mr-auto ml-auto  ">
       <PreHeader />
  <div className="relative w-[96%] h-[96%] mr-auto ml-auto">
      <Image
        src={HeroImage}
        alt="Hero background image"
        fill
        className="object-cover rounded-2xl"
        priority
      />
      <header className="absolute inset-x-0 top-0   text-white">
   <div className="flex items-center gap-4 ">
    <Image
      src={Logo}
      alt="Logo"
      />
<div>
    <MenuLinks />
   </div>
   </div>
   
      </header>
    </div>

      </main>
    </div>
  );
}
