"use client"
import { useState } from "react";
import Container from "../Container";
import Logo from "../Logo";
import Navbar from "./Navbar";

const Header = () => {
  const [showMenu, setShowMenu] = useState<number>(0)
  
  return (
    <>
      <header className="bg-fullwhite flex items-center min-h-[72px] z-20 lg:static sticky top-0">
        <Container className="flex">
          <button className="flex gap-2 flex-col me-5 lg:hidden" onClick={()=>setShowMenu(prev => prev === 0 ? 1 : 0)}>
            <div className="w-8 h-1 bg-black" />
            <div className="w-8 h-1 bg-black" />
            <div className="w-8 h-1 bg-black" />
          </button>
          <Logo />
        </Container>
      </header>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Header;
