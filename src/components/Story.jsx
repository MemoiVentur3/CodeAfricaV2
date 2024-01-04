import item from "../assets/item3.svg";
import spin from "../assets/Group 30.svg"
import Banner from "../assets/Group 48.png"


export default function Story() {
  return (
    <div className="my-[20px]">
      <div className="mx-auto w-full text-white">
        <div className="py-4 flex flex-col justify-center items-center gap-12">
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-2 items-center">
              <h1 className="text-[28px] md:text-[45px] font-[700] ">
                Our Story
              </h1>
              <img src={item} alt="" />
            </div>
            <p className="w-[300px] md:text-[16px] mb-5 text-[14px] text-center md:w-[900px]">
              In 2021, during the boom of NFT 1.0, we created and minted artworks, invested thousands of dollars into several NFT projects,
              contributed to Web3 communities, and tried building NFT-powered products.

            </p>
            <p className="w-[300px] pt-1 md:text-[16px] text-[14px] text-center md:w-[900px]">
              However, we faced lots of difficulties while building and lost most of our investments due to the nature of NFT 1.0.
              Through our frustrations and lessons learned, we decided to launch Mintyplex to solve those challenges and make NFTs more useful and rewarding to the First 1 Billion Web3 Users.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex flex-col justify-center items-center gap-4">

              <div className="flex justify-center animate-spin duratin-2000 items-center  rounded-[50%] w-[100px] h-[100px]">
                
                <img src={spin} alt="" />
              </div> 
              <div className="mt-23 items-center flex h-full w-screen">
                <img src={Banner} alt="" className="justify-center items-center"/>
                 {/* <p
                  behavior="scroll"
                  direction="left"
                  scrollamount="10"
                  className="text-[24px] justify-center mx-auto mt-30 font-extrabold text-white font-[700]"
                >
                  RING THE FUTURE OF NFTs * PIONEERING THE FUTURE OF NFTs * PIONEERI
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
