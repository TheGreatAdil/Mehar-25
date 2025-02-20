"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const NavItems = () => {
  const links = [
    {
      title: "HOME",
      link: "/#home",
    },
    {
      title: "EVENTS",
      link: "/#events",
    },
    {
      title: "CONTACT",
      link: "/#contact",
    },
  ];

  return (
    <>
      {links.map((link, i) => (
        <a
          key={i}
          href={link.link}
          className="tracking-widest font-bold bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent"
        >
          {link.title}
        </a>
      ))}
    </>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="fixed w-full h-16 px-2 flex justify-between z-30 backdrop-blur-sm shadow-xl font-[family-name:var(--font-anek)]">
      <div className="w-48 pt-2">
        <Image width={150} height={150} src={"/logo.png"} alt="mehar 25 logo" />
      </div>
      <nav className="hidden h-full md:flex items-center gap-4 md:gap-12 md:px-4 text-sm">
        <NavItems />
      </nav>

      <div className="md:hidden flex items-center px-2">
        <button onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
          {isOpen ? <MenuIcon size={32} /> : <XIcon size={32} />}
        </button>
        <nav
          className={`${
            isOpen ? "hidden" : ""
          } absolute w-full h-screen top-0 left-0 flex flex-col gap-4 justify-start items-center text-xl px-4 mt-16 bg-black/50`}
        >
          <NavItems />
        </nav>
      </div>
    </header>
  );
}
