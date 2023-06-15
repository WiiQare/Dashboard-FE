import Image from 'next/image'
import React from "react";
import logo from "../../../public/images/logo.png"


function Logo( ) {
  return (
    <Image
      src={logo}
      alt="Picture of the author"
      width="350"
      height="300"
      
    />
  )
}

export default Logo;
