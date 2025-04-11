import Link from 'next/link'
import React, { MouseEvent } from 'react'

export type NavButtonMenuAdminProps = {
    text: string,
    href: string,
    onClick?: (e: MouseEvent<HTMLButtonElement>)=>void
}

const NavButtonMenuAdmin = ({text, href}: NavButtonMenuAdminProps) => {
  return (
    <Link href={href} >
        <button className='h-20 w-full text-start px-6 text-xl hover:text-black text-white  bg-lightseagreen hover:bg-white py-4 transition-all'>
            {text}
        </button>
    </Link>
  )
}

export default NavButtonMenuAdmin