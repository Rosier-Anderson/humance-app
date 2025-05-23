import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { FaXTwitter, FaPhoneVolume } from "react-icons/fa6";
import { DM_SansFont } from "../fonts";
import Link from "next/link";
export default function PreHeader() {
  const socialIcons = [
    {
      name: "facebook",
      icon: <FaFacebookF className="rounded-full bg-black text-white" />,
      href: "https://www.facebook.com",
      target: "_blank",
    },
    {
      name: "instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com",
      target: "_blank",
    },
    {
      name: "twitter",
      icon: <FaXTwitter />,
      href: "https://www.x.com",
      target: "_blank",
    },
    {
      name: "youtube",
      icon: <FaYoutube />,
      href: "https://www.youtube.com",
      target: "_blank",
    },
  ];
  const addressIcon = [
    {
      name: "himapPin",
      icon: <HiMapPin className="w-5 h-5 text-teal-400" />,
      text: "Los Angeles Gournadi, 1230 Bariasl",
    },
    {
      name: "email",
      icon: <FaEnvelope className="w-5 h-5  text-teal-400" />,
      text: "andersonrosier0@gmail.com",
    },
    {
      name: "phone",
      icon: <FaPhoneVolume className="w-5 h-5   text-teal-400" />,
      text: "+1 523 576 4455",
    },
  ];
  return (
    <div className="w-full  h-16 bg-neutral-100  text-lg-500 px-10 max-md:hidden  "> 
      <div className="w-full h-full flex justify-between items-center max-md:w-full ">
        <div className="flex  justify-centeritems-center gap-5">
          {addressIcon.map((icon) => (
            <span key={icon.name} className={`flex items-center gap-2 `}>
              {icon.icon}
              {icon.text}
            </span>
          ))}
        </div>
        <div className={`flex ${DM_SansFont.className}  justify-center items-center gap-5`}>
          {socialIcons.map((icon) => (
            <Link
              key={icon.name}
              href={icon.href}
              target={icon.target}
              className={` w-6 h-6 flex justify-center items-center  hover:bg-teal-400 rounded-full transition-all duration-300 ease-in-out`}
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
