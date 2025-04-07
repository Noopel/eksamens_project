"use client";
import { MouseEvent, useRef } from "react";

type DialogProperties = {
  children?: React.ReactNode;
  id?: string;
  onClick?: (e: MouseEvent) => void;
  className?: string;
} & React.ComponentProps<"dialog">;

const Dialog = (props: DialogProperties) => {
  const modalRef = useRef<HTMLElement | null>(null);

  const handleClick = (e: MouseEvent) => {
    if (props.onClick && modalRef.current && e.target === modalRef.current) {
      props.onClick(e);
    }
  };

  return (
    <article
      {...props}
      ref={modalRef}
      onClick={handleClick}
      
      id={"modalOuter" + props.id}
      className={"fixed top-0 left-0 w-screen h-screen min-h-screen z-50 " + props.className}
    >
      {props.children}
    </article>
  );
};

export default Dialog;