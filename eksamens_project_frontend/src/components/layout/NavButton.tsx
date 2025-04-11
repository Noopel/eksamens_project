import Link from 'next/link'
import React from 'react'

export type NavButtonProps = {
    text: string,
    href: string,
}

const NavButton = ({text, href}: NavButtonProps) => {
  return (
    <Link href={href} >
        <button className='h-full px-5 text-2xl text-white bg-white bg-opacity-0 hover:bg-opacity-[18%] border-t-4 border-t-transparent hover:border-t-lightseagreen pb-1 transition-all'>
            {text}
        </button>
    </Link>
  )
}

export default NavButton