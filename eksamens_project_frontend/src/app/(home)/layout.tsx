import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased">
      <Header />
      {children}
      <Footer />
    </body>
  );
}
