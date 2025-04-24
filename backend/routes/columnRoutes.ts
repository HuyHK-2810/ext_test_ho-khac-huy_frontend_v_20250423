import { Router } from 'express';

const router = Router();

const column = [
  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-1.jpg",
    type: "column"
  },
  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-2.jpg",
    type: "diet"
  },

  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-3.jpg",
    type: "beauty"
  },

  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-4.jpg",
    type: "health"
  },
  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-5.jpg",
    type: "column"
  },
  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-6.jpg",
    type: "diet"
  },

  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-7.jpg",
    type: "beauty"
  },

  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-8.jpg",
    type: "health"
  },
  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-1.jpg",
    type: "column"
  },
  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-2.jpg",
    type: "diet"
  },

  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-3.jpg",
    type: "beauty"
  },

  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-4.jpg",
    type: "health"
  },
  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-5.jpg",
    type: "column"
  },
  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-6.jpg",
    type: "diet"
  },

  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-7.jpg",
    type: "beauty"
  },

  {
    date: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    hashTags: ["#魚料理", "#和食", "#DHA"],
    imageUrl: "/static/img/column-8.jpg",
    type: "health"
  },
];

// Định nghĩa route
router.get('/api/column', (req: any, res: any) => {
  const { page = 1, perPage = 4, textFilter } = req.query;

  const pageNum = parseInt(page as string, 10);
  const perPageNum = parseInt(perPage as string, 10);

  if (isNaN(pageNum) || isNaN(perPageNum) || pageNum < 1 || perPageNum < 1) {
    return res.status(400).json({ message: "Invalid page or perPage parameter" });
  }
  let filteredData = column;

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
