import { Router } from 'express';

const router = Router();

router.get("/api/chart-data", (req, res) => {
  res.json({
    labels: ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40, 30, 20, 15, 10, 5],
        borderColor: "#FFCC21",
        backgroundColor: "rgba(255, 204, 33, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27, 90, 80, 70, 60, 50, 40],
        borderColor: "#8FE9D0",
        backgroundColor: "rgba(143, 233, 208, 0.5)",
      },
    ],
  });
});

export default router;
