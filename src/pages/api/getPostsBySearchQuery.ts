import type { NextApiRequest, NextApiResponse } from 'next';
import blogData from '@/data/blogData';
import { BlogPost } from '@/types/types';

const filterPostsBySearchQuery = (id: number, searchQuery: string) => {
  return blogData.posts
    .filter((post) => post.categories.includes(id))
    .filter(({ title }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost[]>
) {
  const id = Number(req.query.id)
  const query = req.query.query;
  const searchQuery = Array.isArray(query) ? query[0] : query || '';
  const posts = filterPostsBySearchQuery(id, searchQuery);
  res.status(200).json(posts);
}
