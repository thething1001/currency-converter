export interface CurrencyRate {
  r030: number; // Currency code (internal ID)
  txt: string; // Currency name in Ukrainian
  rate: number; // Exchange rate to UAH
  cc: string; // Currency code (ISO 4217)
  exchangeDate: string; // Date of the exchange rate, e.g., "23.07.2025"
}
