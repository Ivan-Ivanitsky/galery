import { useState, useEffect } from "react";
import "./CardList.css";
const CardList = () => {
  const getElem = JSON.parse(localStorage.getItem("cadrElem"));
  const [items, setItems] = useState(getElem.images.slice(0, 4));
  const [fetching, setFetching] = useState(false);
  const [fullImg, setFull] = useState(false);

  const openPhoto = (el) => {
    setFull(el);
  };

  const closeImg = (event) => {
    if (event.target) {
      setFull(false);
    }
  };

  useEffect(() => {
    let length = getElem.images.length;
    let start = items.length;
    let end = items.length + start;

    if (fetching && length > items.length) {
      setItems((items) => [...items, ...getElem.images.slice(start, end)]);
    }
    setFetching(false);
  }, [fetching, getElem.images, items.length]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    const height =
      e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight);

    if (height < 100) {
      setFetching(true);
    }
  };

  if (fullImg) {
    return (
      <>
        <div className="image">
          <button className="button_back" onClick={closeImg}>
            Вернуться
          </button>
          <img src={fullImg} alt="полноразмерная картинка" />
        </div>
        ;
      </>
    );
  }

  return (
    <>
      <a href="/" className="back_link">
        К списку галереи
      </a>
      {items.map((el) => (
        <div key={Math.random(0, el.length)} onClick={() => openPhoto(el)}>
          <img src={el} className="card" alt="card"></img>
        </div>
      ))}
    </>
  );
};

export default CardList;
