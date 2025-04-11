import AdminMenu from "@/components/admin/layout/AdminMenu";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <body className="antialiased flex flex-col ms-[300px] min-h-[100vh]">
    <AdminMenu />
    {children}
    </body>;
}
