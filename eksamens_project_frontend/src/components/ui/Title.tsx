import React from 'react'

export type TitleProps = {
    text: string
} & React.ComponentProps<"p">

const Title = (props: TitleProps) => {
  return (
    <h3 {...props} className={`text-2xl ${props.className}`}>{props.text}</h3>
  )
}

export default Title