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

export interface BlogData {
  posts: BlogPost[];
  categories: BlogCategory[];
}