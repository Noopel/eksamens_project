import React from 'react'

export type ContainerProps = {
    children?: React.ReactNode
} & React.ComponentProps<"article">

const Container = (props: ContainerProps) => {
  return (
    <article {...props} className={`mx-auto w-full xl:max-w-[100rem] px-6 xl:px-0 ${props.className}`} >
        {props.children}
    </article>
  )
}

export default Container