import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "../Container";
import FooterContact from "./FooterContact";
import { AiOutlineGooglePlus } from "react-icons/ai";
import Link from "next/link";
import Title from "../ui/Title";
import Text from "../ui/Text";
import { GoDotFill } from "react-icons/go";
import Button from "../Button";

const Footer = () => {
  const links = [
    {
      text: "Rumfærgen",
      path: "/rumfaergen",
    },
    {
      text: "Galleri",
      path: "/galleri",
    },
    {
      text: "ture",
      path: "/ture",
    },
    {
      text: "Sikkerhed",
      path: "/sikkerhed",
    },
    {
      text: "Vores team",
      path: "/",
    },
  ];

  return (
    <footer className="bg-neutral-300 flex flex-col text-white">
      <section className="min-h-[30rem] bg-prussianblue2 pt-24">
        <Container className="flex flex-wrap justify-between md:gap-0 gap-12 mb-12 md:mb-0">
          <FooterContact />
          <section className="md:w-1/3 w-full flex flex-col gap-6 ">
            <Title text="HURTIG LINKS" className="md:text-left text-center" />
            <div className="flex flex-wrap gap-y-2 md:justify-normal justify-center md:gap-x-0 gap-x-6">
              {links.map((link) => (
                <div key={link.text + link.path} className="flex items-end gap-1 md:w-1/2 w-[30%]">
                  <GoDotFill className="text-lightseagreen text-xl mb-[1px]" />
                  <Link href={link.path}>
                    <Text className="hover:underline" text={link.text} />
                  </Link>
                </div>
              ))}
            </div>
            <Link href={"/kontakt"} className="md:text-left text-center">
             <Button>Kontakt</Button>
            </Link>
          </section>
        </Container>
      </section>
      <section className="h-28 bg-prussianblue">
        <Container className="flex items-center h-full md:flex-row flex-col md:justify-normal justify-center">
          <p className="opacity-35 absolute md:mt-0 mt-20">@ 2021 Space Venture. All rights reserved.</p>
          <div className="mx-auto flex opacity-35 text-xl items-center gap-5">
            <a href="https://facebook.com">
              <FaFacebookF />
            </a>
            <a href="https://x.com">
              <FaTwitter />
            </a>
            <a href="https://google.com">
              <AiOutlineGooglePlus className="text-3xl" />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
