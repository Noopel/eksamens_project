import React from 'react'

export type LargeTitleProps = {
    text: string
} & React.ComponentProps<"p">

const LargeTitle = (props: LargeTitleProps) => {
  return (
    <h3 {...props} className={`text-8xl ${props.className}`}>{props.text}</h3>
  )
}

export default LargeTitle