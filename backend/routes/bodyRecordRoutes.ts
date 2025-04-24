import { Router, Request, Response } from "express";
import { datasets, labels } from "../data/mockData";

const router = Router();

router.get("/api/body-record-data", (req: Request, res: Response) => {
  const { textFilter } = req.query;

  const selectedLabels = labels[textFilter as string] || labels.month;
  const selectedDatasets = datasets[textFilter as string] || datasets.month;

  res.json({
    labels: selectedLabels,
    datasets: selectedDatasets,
  });
});

export default router;
