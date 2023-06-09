import Image from 'next/image'
import React from "react";
import logo from "../../public/images/logo.png"


function Logo(props: Props) {
  return (
    <Image
      src={logo}
      alt="Picture of the author"
      width="350px"
      height="300px"
    />
  )
}

export default Logo;
