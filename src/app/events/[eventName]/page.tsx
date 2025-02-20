import Image from "next/image";
import { events } from "@/lib/constants";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { eventName: string };
}) {
  const { eventName } = await params;
  const currentEvent = events.find((event) => event.name === eventName);

  if (!currentEvent) {
    redirect("/");
  }

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

      <section className="w-full h-screen mx-auto pt-24">
        <h2 className="text-center text-4xl md:text-6xl font-bold text-yellow-200 drop-shadow-xl">
          {currentEvent.title}
        </h2>

        <div className="w-fit mx-auto shadow-xl grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 mt-8">
          {currentEvent.images.map((image, i) => (
            <div key={i} className="relative w-32 h-32 md:w-80 md:h-80 mx-auto">
              <Image
                fill
                src={image}
                alt={currentEvent.title + " photos"}
                className="object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="max-w-7xl px-4 md:px-16 mx-auto mt-8 text-md md:text-2xl text-center font-[family-name:var(--font-anek)] drop-shadow-lg">
          {currentEvent.description}
        </p>
      </section>
    </>
  );
}
