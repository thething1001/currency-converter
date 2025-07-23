import { Request, Response } from "express";
import { fetchRates } from "../services/service";

export const getExchangeRate = async (req: Request, res: Response) => {
  const { from, to } = req.query;

  if (!from || !to) {
    res.status(400).json({ error: "Missing from or to query params" });
    return;
  }

  try {
    const rates = await fetchRates();
    const fromRate = rates[String(from).toUpperCase()];
    const toRate = rates[String(to).toUpperCase()];

    if (!fromRate || !toRate) {
      res.status(404).json({ error: "Currency not found" });
      return;
    }

    const exchangeRate = fromRate / toRate;
    console.log(`${fromRate} ${toRate} ${exchangeRate}`);
    res.json({ rate: exchangeRate });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch rates" });
  }
};
