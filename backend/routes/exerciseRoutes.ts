import { Router } from 'express';

const router = Router();

const mockData = Array.from({ length: 16 }, (_, index) => ({
  activity: `家事全般（立位・軽い）`,
  duration: `${Math.floor(Math.random() * 60) + 1} min`, 
  calories: `${Math.floor(Math.random() * 100) + 10}kcal`, 
}));

router.get("/api/exercise-data", (req, res) => {
  res.json({
    data:mockData,
    date:"2021.05.21",
    });
});

export default router;
