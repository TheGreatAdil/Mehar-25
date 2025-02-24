"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const NavItems = ({ setIsOpen }: { setIsOpen: Function }) => {
  const links = [
    {
      title: "HOME",
      link: "#home",
    },
    {
      title: "EVENTS",
      link: "#events",
    },
    {
      title: "ORGANIZERS",
      link: "#organizers",
    },
    {
      title: "CONTACT",
      link: "#contact",
    },
  ];

  return (
    <>
      {links.map((link, i) => (
        <a
          key={i}
          href={link.link}
          className="tracking-widest font-bold text-yellow-200"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {link.title}
        </a>
      ))}
    </>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full h-16 px-2 flex justify-between z-30 bg-background md:bg-transparent md:backdrop-blur-sm shadow-xl font-[family-name:var(--font-anek)]">
      <div className="w-48 pt-2">
        <Image width={150} height={150} src={"/logo.png"} alt="mehar 25 logo" />
      </div>
      <nav className="hidden h-full md:flex items-center gap-4 md:gap-12 md:px-4 text-sm">
        <NavItems setIsOpen={setIsOpen} />
      </nav>

      <div className="md:hidden flex items-center px-2">
        <button onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
          {isOpen ? <XIcon size={32} /> : <MenuIcon size={32} />}
        </button>
        <nav
          className={`${
            isOpen ? "" : "hidden"
          } absolute w-full h-screen top-0 left-0 flex flex-col gap-6 justify-start items-center text-xl p-8 mt-16 backdrop-blur-lg bg-background/25`}
        >
          <NavItems setIsOpen={setIsOpen} />
        </nav>
      </div>
    </header>
  );
}
