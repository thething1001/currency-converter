import React, { useState } from "react"

type CurrencyCode = "USD" | "EUR" | "UAH"

interface Currency {
  code: CurrencyCode
  name: string
}

export const API_BASE_URL = "http://localhost:8000"

const defaultCurrencies: Currency[] = [
  { code: "USD", name: "Долар США" },
  { code: "EUR", name: "Євро" },
  { code: "UAH", name: "Гривня" },
]

const CurrencyConverter: React.FC = () => {
  const [from, setFrom] = useState<CurrencyCode>("USD")
  const [to, setTo] = useState<CurrencyCode>("UAH")
  const [amount, setAmount] = useState<number>(1)

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: 24,
        borderRadius: 16,
        boxShadow: "0 2px 8px #ddd",
      }}
    >
      <h2>Конвертер валют (НБУ)</h2>
      <div>
        <input
          type="number"
          value={amount}
          min={0}
          step="any"
          onChange={(e) => setAmount(Number(e.target.value))}
          style={{ width: "100%", marginBottom: 12, fontSize: 18, padding: 8 }}
        />
      </div>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value as CurrencyCode)}
          style={{ flex: 1 }}
        >
          {defaultCurrencies.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
        <span style={{ alignSelf: "center" }}>→</span>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value as CurrencyCode)}
          style={{ flex: 1 }}
        >
          {defaultCurrencies.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default CurrencyConverter
