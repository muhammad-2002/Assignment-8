/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { TabContext } from "../pages/LIstedBook";
import App from "../pages/PagesToRead";
import { getIntoLocal } from "../utilities/ManageLocalStorage";
import SelectedBook from "./SelectedBook";

const SelectedBooks = () => {
  const tabIndex = useContext(TabContext);

  const [ReadData, setReadData] = useState([]);
  const [WishData, setWishData] = useState([]);
  App(ReadData);

  useEffect(() => {
    const loadReadIntoLocal = getIntoLocal("read");
    const loadWishIntoLocal = getIntoLocal("wish");
    setWishData(loadWishIntoLocal);
    setReadData(loadReadIntoLocal);
  }, []);

  const showDataToClick = () => {
    if (tabIndex === 0) {
      return ReadData;
    } else {
      return WishData;
    }
  };
  return (
    <div>
      {showDataToClick().map((book) => (
        <SelectedBook key={Math.random()} book={book}></SelectedBook>
      ))}
    </div>
  );
};

export default SelectedBooks;
