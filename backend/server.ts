import express, { Request, Response } from 'express';
import cors from 'cors';
import  productRoutes  from './routes/productRoutes';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(productRoutes);

// Route để đăng nhập (API giả lập)
app.post('/api/login', (req: any, res: any) => {
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
