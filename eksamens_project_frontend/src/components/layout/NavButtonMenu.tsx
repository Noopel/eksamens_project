import Link from 'next/link'
import React, { MouseEvent } from 'react'

export type NavButtonMenuProps = {
    text: string,
    href: string,
    onClick?: (e: MouseEvent<HTMLButtonElement>)=>void
}

const NavButtonMenu = ({text, href}: NavButtonMenuProps) => {
  return (
    <Link href={href} >
        <button className='h-full w-full text-start px-6 text-xl text-black hover:text-white hover:bg-lightseagreen bg-white py-4 transition-all'>
            {text}
        </button>
    </Link>
  )
}

export default NavButtonMenu