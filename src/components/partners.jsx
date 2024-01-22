import logo1 from "../assets/1.svg"
import logo2 from "../assets/2.svg"
import logo3 from "../assets/3.svg"
import logo4 from "../assets/4.svg"
import logo5 from "../assets/5.svg"
import logo6 from "../assets/6.svg"
import logo7 from "../assets/7.svg"
import logo8 from "../assets/8.svg"
import logo9 from "../assets/9.svg"
import logo10 from "../assets/0.svg"
import logo11 from "../assets/01.svg"
import logo12 from "../assets/02.svg"
import logo13 from "../assets/03.svg"

export default function Partners() {
    return (
      <div className="bg-[#020710] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[35px] font-extrabold leading-8 text-[#04BCD4]">
            Our Previous Partners
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo13}
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo2}
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo3}
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo4}
              alt="Workcation"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={logo5}
              alt="StaticKit"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo6}
              alt="Laravel Nova"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo11}
              alt="Laravel Nova"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo8}
              alt="Laravel Spark"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={logo9}
              alt="Laravel Horizon"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={logo10}
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo7}
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo12}
              alt="Statamic"
              width={158}
              height={48}
            />
            {/* <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={logo1}
              alt="Statamic"
              width={158}
              height={48}
            /> */}
          </div>
        </div>
      </div>
    )
  }
  