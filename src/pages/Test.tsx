import { useEffect, useState } from "react";
import { getGifs } from "../../lib/giphy";
import type { Gif } from "../../types";
import TypeWriter from "typewriter-effect";

// put 'default' to component currently testing

export default function TypeWriterLibrary() {
  const typeWriter = (
    <TypeWriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Ok, but...")
          .pauseFor(500)
          .deleteAll()
          .typeString("Ok, but... cards?")
          .pauseFor(500)
          .deleteAll()
          .typeString("Ok, but... interactive?")
          .pauseFor(500)
          .deleteAll()
          .typeString("Ok, but... fun?")
          .pauseFor(500)
          .deleteAll()
          .typeString("Ok, but... personal?")
          .pauseFor(500)
          .deleteAll()
          .typeString("Ok, but... why not?")
          .pauseFor(500)
          .start();
      }}
    />
  );

  return typeWriter;
}

// connect giphy api
export function GiphyApi() {
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
