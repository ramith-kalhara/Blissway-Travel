import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Blissway Travels",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Welcome to Blissway Travels Pvt Ltd, your trusted gateway to exploring the breathtaking beauty and rich culture of Sri Lanka. As a leading travel agency based in the heart of the island, we specialize in curating unforgettable journeys that showcase the charm of our paradise island and beyond."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
