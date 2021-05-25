import { NEWS_API_KEY } from "./config";
export const getNews = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey${NEWS_API_KEY}`
  );
  const data = await res.json();
  return data
}