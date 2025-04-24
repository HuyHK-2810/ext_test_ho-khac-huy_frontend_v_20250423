
# React Project with TailwindCSS, React Query, and Mock API

This is a React project that demonstrates the use of TypeScript, TailwindCSS, React Query, and includes a mock server for API data.

## Features
- **React** with **TypeScript**
- **TailwindCSS** for styling
- **React Query** for data fetching
- A mock server using **json-server** to simulate API responses
- Pages for **Login**, **Index**, **Product List**, and **Product Details**

## Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the mock API server**:
   To start the mock server, run:
   ```bash
   npm run server
   ```

4. **Run the React application**:
   In another terminal window, run:
   ```bash
   npm start
   ```

The React app will run on `http://localhost:3000` and the mock API server will run on `http://localhost:5000`.

## API Endpoints

- **GET /products** - Fetch all products.
- **GET /products/:id** - Fetch a specific product by ID.
