import React from "react";
import Categories from "../Data/Categories";
import Title from "../component/Title";
import Favorites from "../Data/Favory-categories";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import Category from "../component/Sidebar/CategoryItem";
import WideCategory from "../component/Sidebar/WideCategory";

export default function Search() {
  const favoritesRef = React.useRef();
  const [prev, setPrev] = React.useState(false);
  const [next, setNext] = React.useState(false);

  React.useEffect(() => {
    if (favoritesRef.current) {
      const scrollHandle = () => {
        const isEnd =
          favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth ===
          favoritesRef.current.scrollWidth;
        const isBegin = favoritesRef.current.scrollLeft === 0;
        setPrev(!isBegin);
        setNext(!isEnd);
      };

      scrollHandle();
      favoritesRef.current.addEventListener("scroll", scrollHandle);

      return () => {
        favoritesRef?.current?.removeEventListener("scroll", scrollHandle);
      };
    }
  }, [favoritesRef]);

  const slideFavoritesNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 200;
  };
  const slideFavoritesPrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 200;
  };
  return (
    <>
      <section className="mb-8 relative">
        <Title title={"En çok dinlediğin türler"} />
        {prev && (
          <button
            className="w-12 absolute -left-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center"
            onClick={slideFavoritesPrev}
          >
            <MdOutlineArrowBackIos />
          </button>
        )}
        {next && (
          <button
            className="w-12 absolute -right-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center"
            onClick={slideFavoritesNext}
          >
            <MdOutlineArrowForwardIos />
          </button>
        )}
        <ScrollContainer
          innerRef={favoritesRef}
          className="flex scrollable overflow-x gap-x-6"
        >
          {Favorites.map((category, index) => (
            <WideCategory key={index} category={category} />
          ))}
        </ScrollContainer>
      </section>
      <section>
        <Title title={"Hepsine göz at"} />
        <div className="grid grid-cols-5 gap-6">
          {Categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
