import UAuth from "@uauth/js"
import { useState } from "react";

const uauth = new UAuth({
  clientID: "4c9be530-6e86-46a0-a729-9c294a0e90dd",
  redirectUri: "https://mintyplex.com",
  scope: "openid wallet"
})

// uauth.user()
//     .then((user) => {
//         // user exists
//         console.log("User information:", user)
//     })
//     .catch(() => {
//         // user does not exist
//     })

// const Web3modal = async () => {
//     try {
//         const authorization = await uauth.loginWithPopup()
//         console.log(authorization)
//     } catch (error) {
//         console.error(error)
//     }
// }



const Web3modal = async () => {
  const [address, setAddress] = useState('');
    try {
      const authorization = await uauth.loginWithPopup()
      const domainName = authorization.idToken.sub;
      const walletAddress = authorization.idToken.wallet_address;

      console.log('logged in')
      console.log(authorization)
      // console.log('Domain name:', domainName);
      // console.log ('Eth Address', walletAddress);

      setAddress(walletAddress);

    } catch (error) {
      console.error(error)
    }
  }


  const logout = async () => {
    await uauth.logout()
    console.log('Logged out with Unstoppable')
  }
  
  export default Web3modal;
//   export default logout;