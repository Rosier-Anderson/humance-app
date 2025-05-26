// This is a React component that serves as the home page of a web application.
import PreHeader from "../ui/home/pre-header";
import Image from "next/image";
import Logo from "../../public/logo.svg";
// Importing the hero image
import HeroImage from "../../public/hero-header.png";
import NavLinks from "../ui/home/nav-links";
import { FaPhoneVolume } from "react-icons/fa";
export default function HomePage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-screen h-screen bg-neutral-100 ">
      <main className="  w-[96%] h-[96%] flex flex-col  mr-auto ml-auto  ">
        <PreHeader />
        <div className="relative w-[96%] h-[96%] mr-auto ml-auto">
          <div>
             <Image
            src={HeroImage}
            alt="Hero background image"
            fill
            className="object-cover rounded-2xl"
            priority
          />
          </div>
         
          <header className="absolute inset-x-0 top-0 ml-0  text-white w-full h-16 flex items-center justify-between p-4 m-8 ">
            <div className="flex items-center gap-10  ">
              <div className=" ">
                <Image src={Logo} alt="Logo" />
              </div>
              
            
              <NavLinks />
            
            </div>
            <div className=" flex items-center ">
              <div>
                <FaPhoneVolume/>
                <span>+1 (514)-25566-22</span>
              </div>
            </div>
          </header>
        </div>
      </main>
    </div>
  );
}
