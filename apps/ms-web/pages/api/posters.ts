/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { transformPrintfulPostersResponse } from 'apps/ms-web/utils/api';

const handler = async (req: Request, res: Response, next: NextFunction) => {
  switch (req.method) {
    case 'GET':
      let result: AxiosResponse = await axios.get(
        'https://api.printful.com/store/products',
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'Application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PRINTFUL_TOKEN}`,
          },
          withCredentials: true,
        }
      );
      let posters = transformPrintfulPostersResponse(result.data?.result);
      return res.status(200).json({
       posters,
      });
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} now allowed`);
      break;
  }
};

export default handler;
