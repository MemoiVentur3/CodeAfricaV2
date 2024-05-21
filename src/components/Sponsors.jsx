import ICPkushite from "../assets/kushite_icp.svg"
import base from "../assets/base.jpeg"
import fincap from "../assets/fincap.jpeg"
import icp from "../assets/icp.jpeg"
import noones from "../assets/noones.jpeg"
import safari from "../assets/safari.jpeg"
import scroll from "../assets/scroll.jpeg"
import tether from "../assets/tether.jpeg"
import thegraph from "../assets/thegraph.jpeg"
import ubuntu from "../assets/ubuntu.jpeg"
import yellowcard from "../assets/yellowcard.jpeg"
import ethereumFoundation from "../assets/ethereum.jpeg"

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
              src={ICPkushite}
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={ethereumFoundation}
              alt="Ethereum Support"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={base}
              alt="Base"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={fincap}
              alt="Fincap"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={icp}
              alt="ICP"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={noones}
              alt="Noones"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={safari}
              alt="Safari"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={scroll}
              alt="Scroll"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={tether}
              alt="Tether"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={thegraph}
              alt="The Graph"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={ubuntu}
              alt="Ubuntu"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={yellowcard}
              alt="Yellow Card"
              width={158}
              height={48}
            />
            </div>
        </div>
      </div>
    )
  }
  