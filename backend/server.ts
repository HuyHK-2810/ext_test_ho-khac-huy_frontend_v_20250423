import express, { Request } from 'express';
import cors from 'cors';
import historyRoutes from './routes/historyRoutes';
import chartRoutes from './routes/chartRoutes';
import achievementRoutes from './routes/achievementRoutes';
import columnRoutes from './routes/columnRoutes';
import bodyRecordRoutes from './routes/bodyRecordRoutes';
import diaryRoutes from './routes/diaryRoutes';
import exerciseRoutes from './routes/exerciseRoutes';
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(historyRoutes);
app.use(chartRoutes);
app.use(achievementRoutes);
app.use(columnRoutes);
app.use(bodyRecordRoutes);
app.use(diaryRoutes);
app.use(exerciseRoutes);

app.post('/api/login', (req: Request, res: any) => {
  const { username, password } = req.body;
  const { mockUser } = require('./data/mockData');

  if (username === mockUser.username && password === mockUser.password) {
    return res.json({ token: mockUser.token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
