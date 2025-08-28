import { useEffect, useState } from "react";
import { getGifs } from "../../lib/giphy";
import type { Gif } from "../../types";

export default function Test() {
  const keyword = "cars";
  const [gifs, setGifs] = useState<Gif[]>([]);
  useEffect(() => {
    async function fetchData() {
      const gifs = await getGifs(keyword);
      setGifs(gifs);
    }
    fetchData();
  }, [keyword]);

  return (
    <div>
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
    </div>
  );
}
