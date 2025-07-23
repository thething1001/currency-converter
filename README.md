# currency-converter

Currency Converter App. Project consists of frontend (**React.js (Vite)**) and backend (**Node.js + Express.js**)

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed:

- **Node.js**
- **npm**

---

### **1. Clone the Repository**

```bash
git https://github.com/thething1001/currency-converter.git
cd currency-converter
```

---

### **2. Configure Environment Variables**

The project requires environment variables to function properly. To assist you, `.env` files are provided in the following directories:

- `server/`
- `client/`

---

### **3. Install Dependencies**

Install all required Node.js packages for both the frontend and backend:

```bash
cd client
npm install
cd ../server
npm install
```

---

### **4. Start the Application**

Run this command in `client`:

```bash
npm dev
```

Run this commands in `server`:

```bash
npm dev
```

---

### **5. Access the Application**

Once the application is running, you can access it as follows, assuming you left all environment variables untouched (using default settings from `.env.example`):

- **Frontend**: [http://localhost:5000](http://localhost:5000)
- **Backend**: [http://localhost:8000/api](http://localhost:8000)


# Task: Currency Converter

## User Story

As a user, I want to convert between different currencies so that I can know the equivalent value in my desired currency.

## Description

Your task is to build a simple currency conversion service using Node.js.

## Requirements

1. **Currency Conversion Service**
   - Implement a backend service that retrieves current currency exchange rates from the [National Bank of Ukraine Open Data API](https://bank.gov.ua/ua/open-data/api-dev) and create an API endpoint that returns the exchange rate for a given currency pair, including a method to convert any amount from one currency to another (for example, USD to EUR).

2. **Currency Converter UI (React)**
   - Implement a simple user interface using React for currency exchange.
      - The page should include a form where a user can:
         - Select the source currency (e.g., USD).
         - Select the target currency (e.g., EUR).
         - Enter the amount to convert.
      - After clicking the “Convert” button, the UI should call your API and display the conversion result (e.g., “100 USD = 3675.25 UAH”).
   - Add basic validation (e.g., invalid or empty amount should show an error). 

   Example UI:
   ![Demo](client/demo.png)

3. **API Endpoint with Caching**
   - Create an API endpoint that returns the exchange rate for a given currency pair.
   - Cache external exchange rate data to avoid unnecessary calls to the third-party API. Since the rates are updated once a day, the cache should live for at least one day.
