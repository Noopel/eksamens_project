import Container from "../Container";
import NavButton from "./NavButton";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import SideMenu from "../ui/SideMenu";
import NavButtonMenu from "./NavButtonMenu";

const Navbar = ({showMenu, setShowMenu}: {showMenu: number, setShowMenu: (newValue: number)=> void}) => {
  return (
    <>
      <nav className="lg:relative sticky lg:top-0 top-[72px] z-20">
        <div className="bg-prussianblue2 h-20 relative lg:block hidden">
          <Container className="h-full justify-between text-white lg:flex hidden">
            <section className="gap-5 lg:flex hidden">
              <NavButton href="/" text="Hjem" />
              <NavButton href="/rumfaergen" text="Rumfærgen" />
              <NavButton href="/ture" text="Ture" />
              <NavButton href="/galleri" text="Galleri" />
              <NavButton href="/sikkerhed" text="Sikkerhed" />
              <NavButton href="/kontakt" text="Kontakt" />
            </section>
            <section className="items-center lg:flex hidden me-2">
              <div className="mx-auto flex text-2xl items-center gap-5">
                <a href="https://facebook.com">
                  <FaFacebookF />
                </a>
                <a href="https://x.com">
                  <FaTwitter />
                </a>
                <a href="https://google.com">
                  <AiOutlineGooglePlus className="text-4xl" />
                </a>
                <a href="https://instagram.com">
                  <FaInstagram />
                </a>
              </div>
            </section>
          </Container>
        </div>
        <section className="absolute w-full h-full z-10 lg:hidden block lg:border-none border-t-2 border-neutral-200">
          <SideMenu className="bg-fullwhite w-9/12 h-screen sticky top-0 text-white" onBackgroundClick={()=>setShowMenu(0)} show={showMenu}>
            <section className="items-center flex py-6 border-b-2 border-neutral-200">
              <div className="mx-auto flex text-2xl items-center text-black gap-5">
                <a href="https://facebook.com">
                  <FaFacebookF />
                </a>
                <a href="https://x.com">
                  <FaTwitter />
                </a>
                <a href="https://google.com">
                  <AiOutlineGooglePlus className="text-4xl" />
                </a>
                <a href="https://instagram.com">
                  <FaInstagram />
                </a>
              </div>
            </section>
            <section className="flex flex-col mt-4">
              <NavButtonMenu onClick={()=>setShowMenu(0)} href="/" text="Hjem" />
              <NavButtonMenu onClick={()=>setShowMenu(0)} href="/rumfaergen" text="Rumfærgen" />
              <NavButtonMenu onClick={()=>setShowMenu(0)} href="/ture" text="Ture" />
              <NavButtonMenu onClick={()=>setShowMenu(0)} href="/galleri" text="Galleri" />
              <NavButtonMenu onClick={()=>setShowMenu(0)} href="/sikkerhed" text="Sikkerhed" />
              <NavButtonMenu onClick={()=>setShowMenu(0)} href="/kontakt" text="Kontakt" />
            </section>
          </SideMenu>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
