import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image src={"/logo.png"} width={250} height={60} unoptimized alt="Image of Spaceventure logo"  />
  )
}

export default Logo