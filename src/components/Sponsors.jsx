import SponsorsCard from '../assets/sponsors.png'

export default function Sponsors() {
    return (
      <div className="bg-[#020710] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[35px] font-extrabold leading-8 text-[#04BCD4]">
            Sponsored By 
          </h2>
          <div className='mt-10'>
            <img
              className="w-full object-contain"
              src={SponsorsCard}
              alt="Sponsors"
            />
            </div>
          </div>
      </div>
    )
  }
  