import { Router } from 'express';
import { history } from '../data/mockData';

const router = Router();


// Định nghĩa route
router.get('/api/history', (req: any, res: any) => {
  const { page = 1, perPage = 4, textFilter } = req.query;

  const pageNum = parseInt(page as string, 10);
  const perPageNum = parseInt(perPage as string, 10);

  if (isNaN(pageNum) || isNaN(perPageNum) || pageNum < 1 || perPageNum < 1) {
    return res.status(400).json({ message: "Invalid page or perPage parameter" });
  }
  let filteredData = history;
  
  if (textFilter) {
    filteredData = filteredData.filter(item => item.type === textFilter);
  }
  const startIndex = (pageNum - 1) * perPageNum;
  const endIndex = startIndex + perPageNum;

  const paginatedData = filteredData.slice(startIndex, endIndex);

  res.json({
    page: pageNum,
    perPage: perPageNum,
    total: filteredData.length,
    data: paginatedData,
  });
});

export default router;
