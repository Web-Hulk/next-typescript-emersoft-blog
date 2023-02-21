import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { BlogPost } from "../../types/types";

const filterPostsByCategoryId = async (id: number) => {
  try {
    const endpointUrl = process.env.NODE_ENV === 'development'
      ? `${process.env.NEXT_PUBLIC_LOCALHOST_BASE_ENDPOINT}/api/getPosts`
      : `/api/getPosts`;
    // const endpointUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getPosts`;
    const response = await axios.get(endpointUrl);
    const blogData = response.data;
    return blogData.posts.filter((post: BlogPost) => post.categories.includes(id));
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
  const posts = await filterPostsByCategoryId(id);
  res.status(200).json(posts);
}
