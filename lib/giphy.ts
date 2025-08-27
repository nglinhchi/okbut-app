/// <reference types="vite/client" />

export async function getGifs(keyword: string) {
  const searchUrl = import.meta.env.VITE_GIPHY_SEARCH_URL!;
  const trendingUrl = import.meta.env.VITE_GIPHY_TRENDING_URL!;
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY!;
  const limit = 10;
  const offset = Math.floor(Math.random() * 20); // random offset for more variety

  const fetchUrl = keyword.length
    ? `${searchUrl}?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`
    : `${trendingUrl}?api_key=${apiKey}&limit=${limit}&offset=${offset}&rating=g&lang=en`;

  const response = await fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.error("Error fetching GIFs:", err));

  return response;
}
