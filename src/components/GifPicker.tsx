import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { getGifs } from "../../lib/giphy";
import type { Gif } from "../../types";
import Icon from "./Icon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface GifPickerProps {
  onChange: (giphy_id: string) => void;
}

export default function GifPicker(props: GifPickerProps) {
  // TODO [low] search on pressing enter key
  const { onChange } = props;
  const [keyword, setKeyword] = useState("");
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [selectedGif, setSelectedGif] = useState<Gif | null>(null);
  const [openPanel, setOpenPanel] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const handleSearch = async () => {
    setOpenPreview(false);
    const data = await getGifs(keyword);
    setGifs(data);
    setOpenPanel(true);
  };

  const panel = (
    <div className="z-50 w-full h-40 bg-black backdrop-blur-md rounded-lg p-4 overflow-x-scroll flex flex-row gap-4">
      {gifs.length === 0 ? (
        <p className="italic text-gray-400">No GIFs found</p>
      ) : (
        gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
            className="h-32 w-auto rounded cursor-pointer hover:scale-105 transition-transform"
            onClick={() => {
              setOpenPanel(false);
              setSelectedGif(gif);
              setOpenPreview(true);
              setKeyword("");
              onChange(gif.id);
            }}
          />
        ))
      )}
    </div>
  );

  // TODO show preview of selected gif if exists
  const preview = (
    <div className="w-full h-fit bg-gray-300 items-center justify-center rounded-lg p-4 flex">
      <img
        key={selectedGif?.id}
        src={selectedGif?.images.fixed_height.url}
        alt={selectedGif?.title}
        className="h-32 w-auto rounded cursor-pointer transition-transform"
      />
    </div>
  );

  const searchBar = (
    <div className="flex flex-col w-full gap-4">
      <div
        id="gif-search-bar"
        className="flex flex-row items-end justify-center gap-2"
      >
        <Input
          name="keyword"
          value={keyword}
          type="text"
          label="Personalised GIF"
          placeholder="Ducks"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button variant="muted" onClick={handleSearch} className="px-2">
          <Icon icon={faMagnifyingGlass} />
        </Button>
      </div>
      {openPanel && panel}
      {openPreview && preview}
    </div>
  );

  return <div>{searchBar}</div>;
}
