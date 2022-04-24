// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { breed } = req?.query;

  if (!breed) {
    res.status(200).json({ message: `I love you` });
    return;
  }

  res.status(200).json({ message: `I love ${breed}` });

}
