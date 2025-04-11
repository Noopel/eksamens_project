import React from 'react'

export type AdminInput = {} & React.ComponentProps<"input">

const AdminInput = (props: AdminInput) => {
  return (
    <input {...props} className={`p-4 border-[1px] border-black bg-lightseagreen/25 placeholder:text-black/80  ${props.className}`} />
  )
}

export default AdminInput