import axios from "axios";
import { API_BASE_URL } from "../env";
import { CurrencyRate } from "../types/types";

const normalizeRates = (data: CurrencyRate[]) => {
  const result: Record<string, number> = { UAH: 1 };
  data.forEach((entry) => {
    result[entry.cc] = entry.rate;
  });
  return result;
};

export const fetchRates = async () => {
  const response = await axios.get(`${API_BASE_URL}/exchange?json`);
  return normalizeRates(response.data);
};
