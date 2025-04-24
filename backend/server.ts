import express, { Request, Response } from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import historyRoutes from './routes/historyRoutes';
import chartRoutes from './routes/chartRoutes';
import achievementRoutes from './routes/achievementRoutes';
import columnRoutes from './routes/columnRoutes';


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(productRoutes);
app.use(historyRoutes);
app.use(chartRoutes);
app.use(achievementRoutes);
app.use(columnRoutes);

// Route để đăng nhập (API giả lập)
app.post('/api/login', (req: any, res: any) => {
  const { username, password } = req.body;
  const { mockUser } = require('./data/mockData');

  if (username === mockUser.username && password === mockUser.password) {
    return res.json({ token: mockUser.token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// app.get("/api/chart-data", (req, res) => {
//   res.json({
//     labels: ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"],
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: [65, 59, 80, 81, 56, 55, 40, 30, 20, 15, 10, 5],
//         borderColor: "#FFCC21",
//         backgroundColor: "rgba(255, 204, 33, 0.5)",
//       },
//       {
//         label: "Dataset 2",
//         data: [28, 48, 40, 19, 86, 27, 90, 80, 70, 60, 50, 40],
//         borderColor: "#8FE9D0",
//         backgroundColor: "rgba(143, 233, 208, 0.5)",
//       },
//     ],
//   });
// });

// app.get("/api/achievement-rate", (req, res) => {
//   res.json({
//     dateLabel:"05/21",
//     progress: 75,
//   });
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
