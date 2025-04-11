import NavButtonMenuAdmin from "@/components/admin/NavButtonMenuAdmin";
import Title from "@/components/ui/Title";

const AdminMenu = () => {
  return (
    <article className="fixed flex flex-col top-0 left-0 w-[300px] h-screen bg-lightseagreen overflow-y-auto ">
      <Title className="text-center my-4 font-bold" text="Admin Menu" />
      <figure className="w-full text-center my-4 text-4xl font-bold">
        <NavButtonMenuAdmin href="/admin" text="Admin Hjem" />
        <NavButtonMenuAdmin href="/admin/ture" text="Ture" />
        <NavButtonMenuAdmin href="/admin/rumfaergen" text="Rumfærgen"  />
        <NavButtonMenuAdmin href="/" text="Tilbage til forsiden" />
      </figure>
    </article>
  );
};

export default AdminMenu;
