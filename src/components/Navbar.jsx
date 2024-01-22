import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { BsX } from 'react-icons/bs'
import MintyplexLogo from '../assets/codeafrica.png'
// import Web3modal from './web3modal'
import UAuth from "@uauth/js"


  const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );
    
    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);
    
    return [value, setValue];
  };

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Who we Are', href: '/#About' },
  { name: 'What to expect', href: '/#Expect' },
  { name: 'Our Speakers', href: '/#Speakers' },
  { name: 'Partners', href: '/#Sponsors' },
  // { name: 'FAQs', href: '#' },
  // { name: 'Contact Us', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // const [connectedAddress, setConnectedAddress] = useState('');
  const [connectedAddress, setConnectedAddress] = useLocalStorage('user', '');
 
  const uauth = new UAuth({
      clientID: "4c9be530-6e86-46a0-a729-9c294a0e90dd",
      // redirectUri: "http://localhost:3001",
      redirectUri: "https://www.mintyplex.com/",
      scope: "openid wallet"
  })

     // Sign in Modal
  const Web3modal = async () => {
      try {
        const authorization = await uauth.loginWithPopup()
        const domainName = authorization.idToken.sub;
        const walletAddress = authorization.idToken.wallet_address;
  
        console.log('Logged in with Unstoppable')
        console.log(authorization)
        console.log('Domain name:', domainName);
        // console.log ('Eth Address', walletAddress);
  
        setConnectedAddress(domainName);
  
      } catch (error) {
        console.error(error)
      }
    }

    // Logout
    // window.logout = async () => {
    //   await uauth.logout().then((res)=>console.log(res)).catch(e=>console.log(e))
    //   // setDomainLogout(logoutDomain);

    //   console.log(logout)
    // }
    const logout = async () => {
      await uauth.logout()

      console.log('Logged out with Unstoppable')

      setConnectedAddress('');

      console.log('logged out')
    }
  

  return (
    <div>
      <div className='container mx-auto text-white px-[20px]'>
        <div className='py-4 justify-between items-center hidden md:flex'>
          <div className='w-[30px] md:w-[100px]'><img src={MintyplexLogo} alt="MintyplexLogo" /></div>
          <div className='flex gap-8'>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-semibold hover:text-[#2063F2]">
                {item.name}
              </a>
            ))}
          </div>
          
          {connectedAddress ? (
            <div className="flex gap-2">
              <button className="">
                {connectedAddress.length > 0 && `${connectedAddress.substring(0, 5)}...${connectedAddress.substring(12)}`}
              </button>
              <div onClick={logout}>
                <button className="px-6 py-2 bg-[#2063F2] hover:bg-[#fff] hover:text-[#2063F2] text-[14px] w-fit text-[#fff] rounded-3xl">
                Logout
                </button>
              </div>
            </div> ) :
            <div >
              <a href="https://forms.gle/YCEMCfiY4NEtDXxW9">
              <button className="px-6 py-2 bg-[#04BCD4] hover:bg-[#fff] hover:text-sky-500 text-[14px] w-fit text-[#fff] rounded-3xl">
              Become a Sponsor
            </button>
            </a>
            </div>
          }

        </div>

        {/* Mobile Nav */}
        
        <div className='md:hidden py-4 justify-between flex items-center'>
          <div className='w-[30px]'><img src={MintyplexLogo} alt="MintyplexLogo" /></div>
        
            { mobileMenuOpen === (true) ? (
              <button onClick={() => setMobileMenuOpen(false)}><BsX size={25}/></button>
            ) : (
              <FaBars onClick={() => setMobileMenuOpen(true)}/>
            )}
         
        </div>

        {mobileMenuOpen && <div>
          <div className='p-[10px] grid grid-row bg-[#020710] text-slate-300 gap-4'>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-semibold hover:text-[#2063F2]">
                {item.name}
              </a>
            ))}            
            {connectedAddress ? (
              <div className="flex gap-2">
                <button className="">
                  {connectedAddress.length > 0 && `${connectedAddress.substring(0, 5)}...${connectedAddress.substring(12)}`}
                </button>
                <div onClick={logout} >
                  <button className="px-6 py-2 bg-[#2063F2] hover:bg-[#fff] hover:text-[#2063F2] text-[14px] w-fit text-[#fff] rounded-3xl">
                  Logout
                  </button>
                </div>
              </div> ) :
              <div  >
                <a href="https://forms.gle/YCEMCfiY4NEtDXxW9">
                <button className="px-6 py-2 bg-[#04BCD4] hover:bg-[#fff] hover:text-[#04BCD4] text-[14px] w-fit text-[#fff] rounded-3xl">
                Become a Sponsor
              </button>
              </a>
              </div>
            }
          </div>
        </div>}

      </div>
    </div>
  )
}

