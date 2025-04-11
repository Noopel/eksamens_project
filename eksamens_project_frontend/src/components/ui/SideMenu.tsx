import React from "react";

export type SideMenuProps = {
  show: number;
  children: React.ReactNode;
  onBackgroundClick: ()=>void;
} & React.ComponentProps<"div">;

const SideMenu = (props: SideMenuProps) => {
  return (
    <section className="relative w-full h-screen transition-all duration-300" style={{ transform: `translateX(${props.show ? "0%" : "-100%"})` }} onClick={()=>props.onBackgroundClick()}>
      <div {...props} className={`absolute top-0 left-0 ${props.className}`} >
        {props.children}
      </div>
    </section>
  );
};

export default SideMenu;
