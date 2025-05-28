import PreHeader from "../ui/home/pre-header";
import Image from "next/image";
import HeroImage from "../../public/hero-header.png";

import Header from "../ui/home/header";
import HeroText from "../ui/home/hero-text";

export default function HomePage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-screen h-screen bg-neutral-100">
      <main className="w-[96%] h-[96%] flex flex-col mx-auto">
        <PreHeader />
        <div className="relative size-full mx-auto">
          <Image
            src={HeroImage}
            alt="Hero background image"
            fill
            className="object-cover rounded-2xl"
            priority
          />
          <Header />
          <HeroText />
        </div>
        {/* sections  */}
        <section>
          <h1>
            Empowering organizations to thrive through cutting-edge HR
            thecnology{" "}
          </h1>
          <p>
            Where the future of energy is not just a concept it's our mission.
            Born from the vision of <br />
            pionning sustainable world, we are more tham just a company. We
            provide you the best <br />
            service quality with the best rate all the time no matter.
          </p>
          <div>
            <article>
              <h1>Plannind and Analytics </h1>
              {/* the icon goes here  */}
              <hr />
              <p>
                Metus torquent platea aenean orci ridiculus potenci feugiat
                ultricies.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
