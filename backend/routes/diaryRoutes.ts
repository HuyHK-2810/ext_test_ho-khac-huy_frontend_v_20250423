import { Router } from 'express';

const router = Router();

const diary = Array.from({ length: 16 }, (_, index) => ({
  date: `2021.05.21`,
  time: `23:25`,
  title: `私の日記の記録が一部表示されます。`,
  content: `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
}));



router.get('/api/diary', (req: any, res: any) => {
  const { page = 1, perPage = 4 } = req.query;

  const pageNum = parseInt(page as string, 10);
  const perPageNum = parseInt(perPage as string, 10);

  if (isNaN(pageNum) || isNaN(perPageNum) || pageNum < 1 || perPageNum < 1) {
    return res.status(400).json({ message: "Invalid page or perPage parameter" });
  }
 
  const startIndex = (pageNum - 1) * perPageNum;
  const endIndex = startIndex + perPageNum;

  const paginatedData = diary.slice(startIndex, endIndex);

  res.json({
    page: pageNum,
    perPage: perPageNum,
    total: diary.length,
    data: paginatedData,
  });
});

export default router;
