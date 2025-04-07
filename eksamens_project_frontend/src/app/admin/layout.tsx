import AdminFooter from "@/components/admin/layout/AdminFooter";
import AdminHeader from "@/components/admin/layout/AdminHeader";
import AdminMenu from "@/components/admin/layout/AdminMenu";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <body className="antialiased flex flex-col ms-[300px] min-h-[100vh]">
    <AdminMenu />
    <AdminHeader />
    {children}
   {/*  <AdminFooter /> */}
    </body>;
}
