"use client"; // Indicating this is a client component

import { useSearchParams } from "next/navigation"; // Import useSearchParams from next/navigation

import Image from "next/image";





const BlogDetailsPage = () => {
  const searchParams = useSearchParams(); // Get search parameters

  // Retrieve 'id' from the query string (URL)
  const id = searchParams.get("id");

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {/* Display your blog title here */}
                  Explore the Spiritual Wonders of Kataragama
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="author"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          By <span>Musharof Chy</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            {/* Your date icon here */}
                          </svg>
                        </span>
                        12 Jan 2024
                      </p>
                      {/* Display other metadata like tags and category here */}
                    </div>
                  </div>
                </div>

                {/* Optionally, use the id from URL to display the specific blog content */}
                <p>Post ID from URL: {id}</p> {/* Display the blog post ID */}
                
                {/* You might want to make an API call to fetch specific blog details using the `id` */}
                {/* You can show dynamic content related to the ID here */}
                
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
