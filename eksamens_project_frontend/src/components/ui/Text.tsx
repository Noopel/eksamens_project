import React from 'react'

export type TextProps = {
    text: string
} & React.ComponentProps<"p">

const Text = (props: TextProps) => {
  return (
    <p {...props} className={`text-lg ${props.className}`}>{props.text}</p>
  )
}

export default Text