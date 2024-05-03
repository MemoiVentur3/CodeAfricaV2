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
import ethereumFoundation from "../assets/ethereum foundation.svg"
import ICPkushite from "../assets/kushite_icp.svg"

export default function Sponsors() {
    return (
      <div className="bg-[#020710] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[35px] font-extrabold leading-8 text-[#04BCD4]">
            Sponsored By 
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={ethereumFoundation}
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={ICPkushite}
              alt="Reform"
              width={158}
              height={48}
            />
            </div>
        </div>
      </div>
    )
  }
  