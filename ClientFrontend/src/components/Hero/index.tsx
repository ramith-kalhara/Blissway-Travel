'use client'; // Add this line to mark the component as a Client Component

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/images/hero/hero-01.jpg",
    "/images/hero/hero-02.jpg",
    "/images/hero/hero-03.jpg",
    "/images/hero/hero-04.jpg",
    "/images/hero/hero-05.jpg",
    "/images/hero/hero-06.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="absolute inset-0 z-[-1]">
          <Image
            src={images[currentImageIndex]}
            alt={`Blissway Travels Hero Image ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            quality={80}
            style={{ filter: "blur(1px)", transition: "filter 0.3s ease-in-out" }}
          />
        </div>

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Blissway Travels - Your Gateway to Explore Sri Lanka and Beyond
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Discover the beauty of Sri Lanka with Blissway Travels. From serene
                  beaches to lush tea plantations, we offer tailor-made travel packages,
                  ensuring unforgettable journeys across this island paradise and beyond.
                  Your adventure starts here!
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Pro
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
