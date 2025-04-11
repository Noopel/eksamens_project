"use client"
import { useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
    return (

        <button className="fixed bottom-8 right-8 w-16 h-16 bg-lightseagreen flex justify-center items-center text-white text-2xl" onClick={()=>window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
           <IoIosArrowUp />
        </button>

    );
}

export default ScrollToTop