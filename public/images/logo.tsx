import Image from 'next/image'
import React from "react";



function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Picture of the author"
      width="350"
      height="300"

    />
  )
}

export default Logo;
