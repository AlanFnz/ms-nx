/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const handler = async (req: Request, res: Response, next: NextFunction) => {
  switch (req.method) {
    case 'GET':
      let result: AxiosResponse = await axios.get('https://api.printful.com/store/products', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'Application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PRINTFUL_TOKEN}`,
        },
        withCredentials: true,
      })
      let posts: [any] = result.data;
      return res.status(200).json({
        message: posts,
      });
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} now allowed`);
      break;
  }
};

export default handler;
