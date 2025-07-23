import axios from "axios";
import { API_BASE_URL } from "../env";
import { CurrencyRate } from "../types/types";

let cachedRates: Record<string, number> | null = null;
let lastFetchTime = 0; 
const CACHE_TTL = 24 * 60 * 60 * 1000; 

const normalizeRates = (data: CurrencyRate[]) => {
  const result: Record<string, number> = { UAH: 1 };
  data.forEach((entry) => {
    result[entry.cc] = entry.rate;
  });
  return result;
};

export const fetchRates = async () => {
  const now = Date.now();

  if (cachedRates && now - lastFetchTime < CACHE_TTL) {
    return cachedRates;
  }

  const response = await axios.get(`${API_BASE_URL}/exchange?json`);
  cachedRates = normalizeRates(response.data);
  lastFetchTime = now;

  return cachedRates;
};
