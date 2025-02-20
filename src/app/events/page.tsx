import { events } from "@/lib/constants";
import Image from "next/image";

export default function page() {
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

      <main className="w-full mx-auto pt-24">
        <h2 className="text-center text-4xl md:text-6xl font-bold text-yellow-200 drop-shadow-xl">
          FUND RAISING EVENTS
        </h2>
        <div className="w-fit mx-auto my-8 grid md:grid-cols-2 gap-4 md:gap-8">
          {events.map((event, i) => (
            <div
              key={i}
              className="relative w-72 h-72 md:w-[28rem] md:h-80 lg:w-[34rem] lg:h-96 rounded-xl border-background mx-auto hover:scale-105 transition-all duration-500 shadow-lg"
            >
              <Image
                fill
                src={event.src}
                alt={event.alt}
                className="object-cover rounded-xl"
              />
              <a
                href={event.link}
                className="absolute w-full h-full rounded-xl bg-gradient-to-t from-black"
              />
              <div className="w-full absolute p-4 bottom-0 flex justify-between items-end">
                <h3 className="font-bold text-2xl">{event.title}</h3>
                <p>{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
