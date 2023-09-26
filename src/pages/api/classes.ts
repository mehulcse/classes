import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const resp = await fetch(
      'https://run.mocky.io/v3/31a43aef-8202-4a6f-9943-68dac42ae8c0'
    );
    const jsonData = await resp.json();
    res.status(200).json(jsonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error reading JSON file' });
  }
};

export default handler;
