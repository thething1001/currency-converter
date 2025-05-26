# Backend Interview Task: Currency Converter

## Description

Your task is to build a simple currency conversion service using Node.js.

## Requirements

1. **Currency Rate Service**

   - Implement a service that retrieves current currency exchange rates from the [National Bank of Ukraine Open Data API](https://bank.gov.ua/ua/open-data/api-dev).

2. **Currency Converter Method**

   - Implement a method to convert any amount from one currency to another (for example, USD to EUR).

3. **API Endpoint with Caching**
   - Create an API endpoint that returns the exchange rate for a given currency pair.
   - Cache external exchange rate data to avoid unnecessary calls to the third-party API. Since the rates are updated once a day, the cache should live for at least one day.
