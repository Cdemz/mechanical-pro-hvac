import { BsArrowRight, BsBricks, BsFan } from "react-icons/bs";
import { LuAirVent } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { GiMiningHelmet } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import { TbAirConditioning } from "react-icons/tb";

const Services = () => {
  return (
    <div>
      <div className="bg-[var(--color-bg)] pt-6">
        <div className="px-6 text-center  mb-4">
          <p className="text-[var(--color-primary)] font-bold text-sm">
            The Best A Grade Commercial & Residential Services
          </p>
          <h1 className="text-black font-bold text-xl">
            {" "}
            High Quality Construction Solution <br /> For Residentials &
            Industries
          </h1>
        </div>
        {/* container for the options  */}
        <div className=" flex flex-col md:flex-row md:justify-around gap-6 md:gap-0">
          {/* items start  */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 md:w-[30%]">
            <LuAirVent size={36} />
            <p className="text-3xl font-bold ">
              Ductwork Installation <br /> and Repair
            </p>
            <hr />
            <div className="">
              <p className="w-[90%]">
                When it comes to Ductwork Installation and Repair, we offer
                comprehensive services to ensure proper airflow and distribution
                of conditioned air throughout your home. Our technicians will
                assess your ductwork system, identify any leaks or
                inefficiencies, and provide expert solutions. We handle both
                installation and repair, ensuring that your ductwork is properly
                sealed, insulated, and free from any blockages or damages.
                Properly functioning ductwork ensures efficient heating and
                cooling, balanced temperature distribution, and improved indoor
                air quality. With our range of services, we aim to provide you
                with reliable, efficient, and cost-effective solutions for your
                heating, cooling, and ductwork needs. Our team of professionals
                is dedicated to delivering exceptional service, ensuring your
                comfort and satisfaction.
              </p>
              <div className="mt-2">
                <Image
                  src="/img3.png"
                  alt=""
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>
          {/* item 2 */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 md:w-[30%]">
            <TbAirConditioning size={36} />
            <p className="text-3xl font-bold ">
              Air Conditioning (AC) <br /> Repair and Maintenance
            </p>
            <hr />
            <div className="">
              <p className="w-[90%]">
                Air Conditioning (AC) Repair and Maintenance, we understand the
                importance of keeping your AC system running smoothly. Our team
                of experts is equipped to handle AC repair and maintenance tasks
                with precision and efficiency. Regular AC maintenance is crucial
                for keeping your system in peak condition. Our technicians will
                conduct comprehensive inspections, clean or replace air filters,
                check refrigerant levels, and perform any necessary adjustments
                to ensure optimal performance and energy efficiency. In case
                your AC system requires repairs, our skilled professionals will
                diagnose the issue and provide the necessary solutions. Our goal
                is to help you maintain a cool and comfortable indoor
                environment, while also maximizing energy savings and extending
                the lifespan of your AC system.
              </p>
              <div className="mt-2 h-[15rem]">
                <Image
                  src="/img2.png"
                  alt=""
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>
          {/* items 3 */}
          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 md:w-[30%]">
            <BsFan size={36} />
            <p className="text-3xl font-bold ">
              Heating System <br /> Installation and Repair
            </p>
            <hr />
            <div className="">
              <p className="w-[90%]">
                Heating System Installation and Repair, our skilled technicians
                are experienced in handling various heating systems, such as
                furnaces, heat pumps, and boilers. Whether you need a new
                heating system installed or an existing one repaired, we provide
                professional and reliable service. Our team will assess your
                heating requirements, recommend the appropriate system, and
                handle the entire installation process, ensuring a seamless
                integration with your home. If you're experiencing issues with
                your heating system, our technicians will diagnose the problem
                and perform the necessary repairs to restore optimal
                functionality. With our heating services, you can enjoy
                efficient heating, improved comfort, and reduced energy costs.
              </p>
              <div className="mt-2">
                <Image
                  src="/img1.png"
                  alt=""
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
