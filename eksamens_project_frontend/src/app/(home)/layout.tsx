import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </body>
  );
}
