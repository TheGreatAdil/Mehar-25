"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { previousImages } from "@/lib/constants";
import { motion } from "motion/react";

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

      <main className="w-full h-screen mx-auto pt-32" id="#home">
        <div className="relative h-32 md:h-44 mx-auto drop-shadow-xl">
          <Image
            src={"/anniversary logo.png"}
            alt="anniversary logo"
            fill
            priority
            quality={100}
            className="object-contain"
          />
        </div>
        <div className="relative h-32 md:h-44 mx-auto drop-shadow-lg">
          <Image
            src={"/hero logo.png"}
            alt="hero logo"
            fill
            priority
            quality={100}
            className="object-contain mt-3 md:mt-6"
          />
        </div>
        <p className="max-w-7xl px-4 md:px-16 mx-auto mt-16 md:mt-24 text-2xl md:text-3xl text-center font-[family-name:var(--font-anek)] drop-shadow-lg">
          എം ഇ എ എഞ്ചിനീയറിംഗ് കോളേജിലെ വിദ്യാർത്ഥികളും, പൂർവ്വ വിദ്യാർത്ഥികളും,
          അദ്ധ്യാപകരും, മാനേജ്മെന്റും സംയുക്തമായി സങ്കടിപ്പിക്കുന്ന സമൂഹ വിവാഹ
          ഉദ്യമമാണ് മെഹർ.
        </p>
      </main>

      <section
        className="w-full md:h-screen mx-auto pt-24 md:pt-32"
        id="#previous"
      >
        <div className="w-full mx-auto">
          <InfiniteSlider className="h-fit" duration={10}>
            {previousImages.map((image, i) => (
              <div
                key={i}
                className="relative w-32 h-32 md:w-48 md:h-48 mx-auto"
              >
                <Image
                  fill
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="object-cover shadow-xl rounded-xl"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
        <p className="max-w-7xl px-4 md:px-16 mx-auto my-8 md:my-24 text-2xl md:text-3xl text-center font-[family-name:var(--font-anek)] drop-shadow-lg">
          2016-ൽ തുടങ്ങിയ മെഹർ പത്താണ്ടുകൾ പിന്നിടവേ ഇതുവരെ 74 ഓളം യുവതികളുടെ
          മാംഗല്യ സ്വപ്നങ്ങൾക്ക് നിറ പകിട്ടേകുകയും, 100ൽപരം വിവാഹങ്ങൾക്ക്
          സഹായങ്ങൾ എത്തിക്കാനും ഈ ഒരു കാലയളവിൽ നമ്മുടെ വിദ്യാർത്ഥികൾക്ക്
          സാധിച്ചിട്ടുണ്ട്. ഈ ഒരു പത്തു വർഷ കാലയളവിൽ ഏകദേശം 4.5 കോടി രൂപ ഈ
          ഉദ്യമത്തിൽ നമ്മൾ ചിലവഴിക്കുക്കയുണ്ടായി.
        </p>
        <div className="w-full mx-auto">
          <InfiniteSlider className="h-fit" duration={10} reverse>
            {previousImages.map((image, i) => (
              <div
                key={i}
                className="relative w-32 h-32 md:w-48 md:h-48 mx-auto"
              >
                <Image
                  fill
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="object-cover shadow-xl rounded-xl"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </section>

      <section className="w-full md:h-screen mx-auto pt-24" id="#sahapadi">
        <div className="relative h-28 md:h-48 mx-auto drop-shadow-md">
          <Image
            src={"/sahapadi logo.png"}
            alt="sahapadi logo"
            fill
            loading="lazy"
            quality={100}
            className="object-contain"
          />
        </div>
        <div className="relative w-80 h-56 md:w-[36rem] md:h-80 mx-auto mt-6">
          <Image
            fill
            src={"/images/IMG_20221118_162729.jpg"}
            alt={"sahapadik oru snehakood picture"}
            loading="lazy"
            className="object-cover shadow-xl rounded-xl"
          />
        </div>
        <p className="max-w-7xl px-4 md:px-16 mx-auto mt-16 md:mt-8 text-2xl md:text-2xl text-center font-[family-name:var(--font-anek)] drop-shadow-lg">
          മെഹർ പത്താം വാർഷികത്തോടനുബന്ധിച്ച്, കമ്മിറ്റി പുതുതായി തീരുമാനമെടുത്ത
          പദ്ധതിയാണ് സഹപാഠിക്ക് ഒരു സ്നേഹക്കൂട്. പ്രസ്തുത പദ്ധതിക്ക് കീഴിൽ
          കോളേജ് വിദ്യാർത്ഥികൾക്കിടയിൽ നിന്നും ദുരിതം അനുഭവിക്കുന്ന
          വിദ്യാർത്ഥിയുടെ കുടുംബത്തിന് സ്ഥിരവാസത്തിന് അനുയോജ്യമായ ഭവനം
          നിർമ്മിച്ചു കൊടുക്കുക എന്നതാണ് ലക്ഷ്യം. നമ്മുടെ കോളേജിൽ പഠിക്കുന്ന ഒരു
          വിദ്യാർത്ഥിയും അവൻറെ കുടുംബവും നിലവിൽ താമസിച്ചുകൊണ്ടിരിക്കുന്ന വീടാണ്
          മുകളിൽ തന്നിട്ടുള്ള ചിത്രം. പ്രസ്തുത വിദ്യാർഥിക്ക് അത്യാവശ്യ
          സൗകര്യങ്ങൾ അടങ്ങുന്ന ഒരു പുതിയ വീട് നിർമ്മിച്ചു കൊടുക്കാനാണ് ഈ വർഷം
          പദ്ധതിയിട്ടിട്ടുള്ളത്. പ്രസ്തുത പദ്ധതിയിലേക്ക് നിങ്ങളാൽ കഴിയുന്ന
          സംഭാവനകൾ അർപ്പിക്കുക.
        </p>
      </section>
    </>
  );
}
