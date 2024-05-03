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
  