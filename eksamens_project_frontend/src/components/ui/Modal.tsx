"use client";
import { Attributes, MouseEvent, useRef } from "react";

type ModalArguments = {
  children?: React.ReactNode;
  id?: string;
  onClick?: (e: MouseEvent) => void;
  className?: string;
} 

const Modal = ({ children, id = "", onClick, className }: ModalArguments) => {
  const modalRef = useRef<HTMLElement | null>(null);

  const handleClick = (e: MouseEvent) => {
    if (onClick && modalRef.current && e.target === modalRef.current) {
      onClick(e);
    }
  };

  return (
    <article ref={modalRef} onClick={handleClick} id={"modalOuter" + id} className={"fixed top-0 left-0 w-screen h-screen min-h-screen z-50 " + className}>
      {children}
    </article>
  );
};

export default Modal;