"use client"; // Indicating this is a client component

import { useSearchParams } from "next/navigation"; // Import useSearchParams from next/navigation
import Image from "next/image";
import { Blog } from "@/types/blog"; // Assuming the Blog type is defined
import blogData from "@/components/Blog/blogData"; // Import blog data

const BlogDetailsPage = () => {
  const searchParams = useSearchParams(); // Get search parameters
  const id = searchParams.get("id"); // Retrieve 'id' from the query string (URL)

  // If 'id' is not available, return an error message or fallback component
  if (!id) {
    return <p>Error: ID not found</p>;
  }

  // Find the blog matching the 'id'
  const blog: Blog | undefined = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Error: Blog not found</p>; // If no blog is found with that id
  }

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {blog.title}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={blog.author.image}
                            alt="author"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          By <span>{blog.author.name}</span>
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
                        {blog.publishDate}
                      </p>
                      <p className="flex items-center text-base font-medium text-body-color">
                        {blog.tags.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Blog content */}
                <p>{blog.paragraph}</p>
                <div className="mt-8">
                  <Image src={blog.image} alt={blog.title} width={900} height={600} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
