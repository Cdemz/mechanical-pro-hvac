import Image from "next/image";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="md:h-[30rem]">
          <Image
            src="/main-hero.png"
            alt="hero-img"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-0 items-center justify-center p-6 text-center flex flex-col text-[var(--color-bg)] bg-black bg-opacity-60 h-full w-full">
          <div className="rotation animate-spin-slow ">
            <Image src="/mec logo.png" alt="logo" width={200} height={200} />
          </div>
          <h1 className="mb-10 text-lg">MECHANICAL PRO HVAC</h1>
          <p>Quality Service from Certified Technicians </p>
          <button
            type="button"
            className="bg-[var(--color-extra)] border-[var(--color-bg)] border-2 py-2 px-4 font-bold  "
          >
            {" "}
            GET A FREE ESTIMATE
          </button>
        </div>
      </div>
      <section></section>
    </main>
  );
}
