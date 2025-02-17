import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed w-full h-screen -z-30">
        <Image
          src={"/background.png"}
          alt="background image"
          className="object-cover"
          quality={100}
          fill
        />
      </div>

      <main className="w-full h-screen mx-auto pt-24 md:pt-32">
        <div className="relative h-32 md:h-44 mx-auto">
          <Image
            src={"/anniversary logo.png"}
            alt="anniversary logo"
            fill
            priority
            quality={100}
            className="object-contain"
          />
        </div>
        <div className="relative h-32 md:h-44 mx-auto">
          <Image
            src={"/hero logo.png"}
            alt="hero logo"
            fill
            priority
            quality={100}
            className="object-contain mt-3 md:mt-6"
          />
        </div>
      </main>
    </>
  );
}
