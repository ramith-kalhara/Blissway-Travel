type Author = {
  name: string;
  image: string;
  designation: string;
};

type More_link = {
  name : string ; 
  link : string ;
}

export type Blog = {
  id: number;
  title: string;
  paragraph_1: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  paragraph_2:string; 
  paragraph_3:string; 
  more_link: More_link; 
  miniTitle:string; 
  paragraph_4:string ; 
  listUl:string[];
  paragraph_5:string;
};
