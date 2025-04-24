import { Router } from 'express';

const router = Router();

const history = [
  { text: "05.21.Morning", imageUrl: "/static/img/m01.jpg", type: "Morning" },
  { text: "05.21.Lunch", imageUrl: "/static/img/l03.jpg", type: "Lunch" },
  { text: "05.21.Dinner", imageUrl: "/static/img/d01.jpg", type: "Dinner" },
  { text: "05.21.Snack", imageUrl: "/static/img/l01.jpg", type: "Snack" },
  { text: "05.20 Morning", imageUrl: "/static/img/m01.jpg", type: "Morning" },
  { text: "05.20 Lunch", imageUrl: "/static/img/l02.jpg", type: "Lunch" },
  { text: "05.20.Dinner", imageUrl: "/static/img/d02.jpg", type: "Dinner" },
  { text: "05.20.Snack", imageUrl: "/static/img/s01.jpg", type: "Snack" },
  { text: "05.19.Morning", imageUrl: "/static/img/m02.jpg", type: "Morning" },
  { text: "05.19.Lunch", imageUrl: "/static/img/l03.jpg", type: "Lunch" },
  { text: "05.19.Dinner", imageUrl: "/static/img/d01.jpg", type: "Dinner" },
  { text: "05.19.Snack", imageUrl: "/static/img/s01.jpg", type: "Snack" },
];

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
