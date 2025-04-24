# Fullstack React Project with TailwindCSS, React Query, and Mock API

This is a fullstack React project that demonstrates the integration of a backend API with a React frontend. The project uses TypeScript, TailwindCSS, React Query, and includes a mock server for API data.

## Features

### Backend
- Node.js with Express.js
- Mock login API
- Routes for handling history, charts, achievements, columns, body records, and diaries

### Frontend
- **React** with **TypeScript**
- **TailwindCSS** for styling
- **React Query** for data fetching
- Pages for **Login**, **My Page**, **Column Page**, and **My Record Page**

## Requirements
- Node.js (version 16.20 or later)
- Yarn or npm for dependency management

## Setup

### Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### Install Dependencies
```bash
yarn install
```
or if you prefer npm:
```bash
npm install
```

## Backend Setup

### 1. Start the Mock Server
To start the backend server:
```bash
yarn server
```
or with npm:
```bash
npm run server
```
This will run a JSON Server at `http://localhost:5000`.

### 2. Backend Features
#### Login API
- **Endpoint**: `POST /api/login`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  - Success: `{ "token": "string" }`
  - Failure: `{ "message": "Invalid credentials" }`

#### Additional Routes
Each route file in the `routes/` folder handles specific APIs:
- `historyRoutes`: APIs for historical data.
- `chartRoutes`: APIs for chart-related data.
- `achievementRoutes`: APIs for achievements.
- `columnRoutes`: APIs for column data.
- `bodyRecordRoutes`: APIs for body records.
- `diaryRoutes`: APIs for diary management.

## Frontend Setup

### 1. Start the React Application
To start the frontend application:
```bash
yarn start
```
or with npm:
```bash
npm start
```
The React app will run on `http://localhost:3000`.

### 2. Frontend Features
#### Pages
- **Login Page**: Path: `/login` (also accessible at `/`)
- **My Page**: Path: `/my-page`
- **Column Page**: Path: `/column`
- **My Record Page**: Path: `/my-record`

#### Routing
The application uses React Router for navigation. Routes are defined in `App.js`.

#### Styling
TailwindCSS is used for styling. Customize styles via `tailwind.config.js`.

#### Mock API Integration
The frontend integrates with the mock backend API for seamless testing and development.

## Combined Project Structure
```
.
├── backend
│   ├── routes
│   │   ├── historyRoutes.js
│   │   ├── chartRoutes.js
│   │   ├── achievementRoutes.js
│   │   ├── columnRoutes.js
│   │   ├── bodyRecordRoutes.js
│   │   └── diaryRoutes.js
│   ├── data
│   │   └── mockData.js
│   └── index.js
├── frontend
│   ├── pages
│   │   ├── LoginPage.js
│   │   ├── MyPage.js
│   │   ├── ColumnPage.js
│   │   └── MyRecordPage.js
│   ├── styles
│   │   └── index.css
│   ├── App.js
│   ├── index.js
│   ├── tailwind.config.js
│   └── mockdb.json
└── package.json
```

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact
For inquiries or support, contact the repository maintainer.
