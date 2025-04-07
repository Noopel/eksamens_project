import ScrollableContainer from "@/components/ui/scroll/ScrollableContainer"

const AdminMenu = () => {
  return (
    <article className="fixed flex flex-col top-0 left-0 w-[300px] h-screen bg-slate-500 overflow-y-auto ">
        <figure className="w-full text-center my-4 text-4xl font-bold">
            ADMIN PAGE
        </figure>
        <ScrollableContainer>
          
        </ScrollableContainer>

    </article>
  )
}

export default AdminMenu