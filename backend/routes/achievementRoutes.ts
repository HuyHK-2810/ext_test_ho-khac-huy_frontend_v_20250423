import { Router } from 'express';

const router = Router();

router.get("/api/achievement-rate", (req, res) => {
  res.json({
    dateLabel:"05/21",
    progress: 75,
  });
});

export default router;
