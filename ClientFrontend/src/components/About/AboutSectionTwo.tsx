import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/aboutus2.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-full"
              />
              <Image
                src="/images/about/aboutus2.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-full"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed ">
                At Blissway Travels, we take pride in showcasing the wonders of Sri Lanka’s pristine beaches, lush tea plantations, ancient cities, and vibrant wildlife. Whether you dream of experiencing local traditions, enjoying luxurious getaways, or embarking on thrilling adventures, our expert team creates tailor-made itineraries that bring your travel aspirations to life.

                With a perfect blend of local expertise and global connections, we ensure every journey is seamless, enriching, and memorable.</p>
                
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">From family vacations and romantic escapes to group tours and business retreats, Blissway Travels caters to diverse travel needs with unmatched professionalism and personalized care.

                Uncover the world and its wonders with Blissway Travels Pvt Ltd—where every journey begins with a promise of bliss.</p> 
                
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
