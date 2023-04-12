// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import scrapeAnchors from "@/utils/scraper";


export default async (req, res) => {
  try {
    // Call the scraper function to fetch the anchor data
    const anchors = await scrapeAnchors('https://vercel.com/');
    res.status(200).json(anchors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anchor data' });
  }
};




