interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: number[];
}

interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

export default interface BlogData {
  posts: BlogPost[];
  categories: BlogCategory[];
}

export type LinkItem = {
  href: string,
  name: string,
};