import React from 'react'

export type ButtonProps = {
    children?: React.ReactNode
} & React.ComponentProps<"button">

const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={`text-2xl text-white text-center bg-lightseagreen py-6 px-10 hover:underline ${props.className}`}>{props.children}</button>
  )
}

export default Button