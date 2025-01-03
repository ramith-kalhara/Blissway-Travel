import { Blog } from "@/types/blog";


const blogData: Blog[] = [
  {
    id: 1,
    title: "Explore the Spiritual Wonders of Kataragama",
    paragraph:
      "Visit the sacred town of Kataragama, a place of pilgrimage for Buddhists, Hindus, and Muslims. Experience its vibrant festivals and serene surroundings.",
    image: "/images/blog/blog-01.webp",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Travel Consultant",
    },
    tags: ["spiritual"],
    publishDate: "2025",
    weare:"young",
  },
  {
    id: 2,
    title: "Discover the Scenic Beauty of Ella",
    paragraph:
      "Ella is a paradise for nature lovers. Enjoy breathtaking views, visit Nine Arches Bridge, and trek to Little Adam’s Peak for an unforgettable adventure.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Travel Blogger",
    },
    tags: ["nature"],
    publishDate: "2025",
    weare:"nes",
  },
  {
    id: 3,
    title: "Relax at the Stunning Beaches of Mirissa",
    paragraph:
      "Mirissa offers golden sands, turquoise waters, and thrilling whale-watching tours. A perfect destination for beach lovers and adventurers alike.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Beach Specialist",
    },
    tags: ["beach"],
    publishDate: "2025",
    weare:"old",
  },
  {
    id: 4,
    title: "Relax at the Stunning Beaches of Mirissa",
    paragraph:
      "Mirissa offers golden sands, turquoise waters, and thrilling whale-watching tours. A perfect destination for beach lovers and adventurers alike.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Beach Specialist",
    },
    tags: ["beach"],
    publishDate: "2025",
  },

  {
    id: 5,
    title: "Relax at the Stunning Beaches of Mirissa",
    paragraph:
      "Mirissa offers golden sands, turquoise waters, and thrilling whale-watching tours. A perfect destination for beach lovers and adventurers alike.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Beach Specialist",
    },
    tags: ["beach"],
    publishDate: "2025",
  },
  
];
export default blogData;



// import axios from "axios";
// import { Blog } from "@/types/blog";

// // Declare the variable blogData with the Blog[] type.
// let blogData: Blog[] = [];

// // Perform the GET request to fetch the blog data.
// axios.get("/your/api/endpoint")
//   .then((response) => {
//     // Assuming response.data contains the array from the backend
//     blogData = response.data;
//   })
//   .catch((error) => {
//     console.error("Error fetching blog data:", error);
//   });

// export default blogData;
