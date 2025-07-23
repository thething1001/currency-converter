import dotenv from "dotenv";
dotenv.config();

export const API_BASE_URL =
  process.env.API_BASE_URL ||
  "https://bank.gov.ua/NBUStatService/v1/statdirectory";
export const PORT = process.env.PORT || 8000;
