import Image from "next/image";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdMarkEmailRead, MdSevereCold } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { BsFan } from "react-icons/bs";
import { LuAirVent } from "react-icons/lu";
import { GiStairs } from "react-icons/gi";
import { TbAirConditioning, TbHomeBolt } from "react-icons/tb";
import Services from "./components/Services";
import Footer from "./components/Footer";

const data = [
  {
    avatar: <LuAirVent />,
    name: "Get a brand new HVAC system installed for your home.",
    reveiw: "Residential HVAC Installation",
  },

  {
    avatar: <MdSevereCold />,
    name: "Shatta Wale",
    reveiw:
      "I am very happy with Ademola Adepoju's work as a frontend developer and content creator. His attention to detail and ability to bring my ideas to life has greatly improved my website's functionality and user experience. Ademola is easy to work with, communicates effectively, and has a great attitude. I highly recommend him to anyone in need of a skilled developer and content creator.",
  },

  {
    avatar: <BsFan />,
    name: " Leigh Ola",
    reveiw:
      "A true professional who is easy to work with and has a great attitude. He communicates effectively and always keeps me in the loop with updates on the project. I highly recommend Ademola to anyone who needs a skilled developer for their website.",
  },

  {
    avatar: <GiStairs />,
    name: "Rayyan Ryan",
    reveiw:
      "I recently hired Ademola to work on the frontend development and content creation of my website. I must say that I am extremely impressed with his work so far. He is a very talented and skilled developer who has a keen eye for detail.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="md:h-[30rem] h-[35rem]">
          <Image
            src="/main-her.png"
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
          <h1 className="mb-6 text-2xl">MECHANICAL PRO HVAC</h1>
          <p className="font-bold text-2xl mb-2">
            Quality Service from Certified Technicians{" "}
          </p>
          <button
            type="button"
            className="bg-[var(--color-extra)] border-[var(--color-bg)] border-2 py-2 px-4 font-bold  "
          >
            {" "}
            GET A FREE ESTIMATE
          </button>
        </div>
      </div>
      {/* the buttons  */}
      <section className="bg-[var(--color-bg)] text-[var(--color-text)] p-4">
        <div className="flex gap-6 p-6 shadow-xl mb-4 rounded-[2rem] hover:border-[var(--color-primary)] border-2">
          <BiPhoneCall size={60} />
          <div className="">
            <p className="text-lg text-gray-500">Phone Number</p>
            <h1 className="font-bold text-2xl">(704) 931-6400</h1>
          </div>
        </div>
        {/* email  */}
        <div className="flex gap-6 p-6 shadow-xl mb-4 rounded-[2rem] hover:border-[var(--color-primary)] border-2">
          <MdMarkEmailRead size={60} />
          <div className="">
            <p className="text-lg text-gray-500">Email</p>
            <h1 className="font-bold text-2xl">To Be Updated</h1>
          </div>
        </div>
        <div className="flex gap-6 p-6 shadow-xl mb-4 rounded-[2rem] hover:border-[var(--color-primary)] border-2 items-center">
          <AiOutlineFieldTime size={60} />
          <div className=" flex">
            <h1 className="font-bold text-2xl">Monday - Sunday: </h1>
            <p className="text-lg text-gray-500"> 24 hrs.</p>
          </div>
        </div>
        {/* small gist  */}
        <div className="">
          <p className="font-bold text-2xl md:w-[50%] my-4">
            Providing High-Quality HVAC Service to North Carolina and the
            Surrounding Areas
          </p>
          <p>
            Experience top-notch HVAC service from highly skilled professionals
            in the NC area! At Mechanical Pro HVAC, we are committed to
            providing you with exceptional service that exceeds your
            expectations. Whether you require AC replacement, heating repair, or
            any other HVAC needs, our team of Star Certified Technicians with
            over 20 years of combined experience has got you covered. When you
            choose to work with us, you can expect not only quality customer
            service and outstanding workmanship, but also honest and reliable
            assistance that ensures your utmost satisfaction.
          </p>
        </div>

        {/* the services  */}
        <div className="text-center">
          <h1 className="font-bold text-2xl mx-auto my-4">
            Our Full Range of Services
          </h1>
          {/* list of items  */}
          <div className="flex gap-6  mb-4 ">
            <div className="rounded-[1rem] shadow-xl p-6  hover:border-[var(--color-primary)] border-2 flex flex-col gap-2 items-center text-center">
              <LuAirVent
                size={70}
                className="mb-3 text-[var(--color-primary)] "
              />
              <p>Get a brand new HVAC system installed for your home.</p>
              <h1 className="font-bold">Residential HVAC Installation</h1>
            </div>
          </div>
          {/* end of items  */}
        </div>
        <div className=" text-center">
          <p>
            We offer free estimate and
            <span className="text-[var(--color-primary)] font-bold text-2xl block md:inline-flex md:ml-2">
              same-day installations!
            </span>
          </p>
          <button
            type="button"
            className="bg-[var(--color-primary)] text-[var(--color-bg)] rounded-2xl py-2 px-6"
          >
            (704) 218-9219
          </button>
        </div>
      </section>
      <Services />
      <Footer />
    </main>
  );
}
