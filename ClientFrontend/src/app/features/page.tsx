import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleFeature from "@/components/Features/SingleFeature";
import featuresData from "@/components/Features/featuresData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "feature Page | Blissway Travels ",
  description: "This is feature Page for Blissway Travels",
};

const Features = () => {
  return (
    <>
      <Breadcrumb
        pageName="features Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[20px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-20 "
              >
                <SingleFeature feature={feature} />
                
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Features;
