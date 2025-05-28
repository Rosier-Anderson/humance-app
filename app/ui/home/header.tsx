import Image from "next/image";
import Logo from "../../../public/logo.svg";
import NavLinks from "../home/nav-links";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
// Header component - displays logo, navigation links, contact info, and a 'Get in touch' button
export default function Header() {
  return (
    <header className="absolute z-10 inset-x-0 top-0 text-white h-16 flex items-center justify-between p-4 m-8">
      <div className="flex items-center gap-10">
        <Image src={Logo} alt="Logo" />
        <NavLinks />
      </div>

      <div className="flex items-center">
        <div className="flex items-center justify-center gap-2 px-4 max-xl:hidden">
          <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaPhoneVolume className="h-6 w-6 text-[#063137]" />
          </span>
          <span className="whitespace-nowrap">+1 (514)-25566-22</span>
        </div>

        <div className="group bg-teal-400 hover:bg-teal-950 rounded-lg p-2">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 cursor-pointer"
            rel="noopener noreferrer"
          >
            <span className="whitespace-nowrap font-bold text-lg p-2">
              Get in touch
            </span>
            <span className="bg-white group-hover:bg-teal-400 w-11 h-11 rounded-lg flex items-center justify-center">
              <MdArrowOutward className="w-4 h-4 text-[#063137]" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
