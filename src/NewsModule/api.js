import { NEWS_API_KEY } from "./Config";


export const getArticles = async (topic) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    const response2 = await fetch('https://newsapi.org/v2/top-headlines?q=&{topic}&sortBy=publishedAt&country=in&apiKey=c80618b2ea2f46ddb2ed6869e8738a79');
    const json = await response.json();
    return json;
  };