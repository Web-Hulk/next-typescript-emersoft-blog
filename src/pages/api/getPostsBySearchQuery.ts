import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { BlogPost } from '@/types/types';

const filterPostsBySearchQuery = async (id: number, searchQuery: string) => {
  try {
    const endpointUrl = process.env.NODE_ENV === 'development'
      ? `${process.env.NEXT_PUBLIC_LOCALHOST_BASE_ENDPOINT}/api/getPosts`
      : `${process.env.NEXT_PUBLIC_PRODUCTION_BASE_ENDPOINT}/api/getPosts`;

    const response = await axios.get(endpointUrl);
    const blogData = response.data;

    return blogData.posts
      .filter((post: BlogPost) =>
        post.categories.includes(id) &&
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost[]>
) {
  const id = Number(req.query.id);
  const query = req.query.query;
  const searchQuery = Array.isArray(query) ? query[0] : query || '';
  const posts = await filterPostsBySearchQuery(id, searchQuery);

  res.status(200).json(posts);
}
