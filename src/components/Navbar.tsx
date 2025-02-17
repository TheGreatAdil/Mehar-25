import Image from "next/image";

export default function Navbar() {
  const links = [
    {
      title: "HOME",
      link: "#home",
    },
    {
      title: "DONATE",
      link: "#donate",
    },
    {
      title: "TEST",
      link: "#test",
    },
  ];

  return (
    <nav className="fixed w-full h-16 px-2 flex justify-between z-30 backdrop-blur-sm shadow-xl">
      <div className="w-48 pt-2">
        <Image width={150} height={150} src={"/logo.png"} alt="mehar 25 logo" />
      </div>
      <div className="h-full flex items-center gap-10 px-4">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.link}
            className="text-sm tracking-widest font-bold bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent"
          >
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
