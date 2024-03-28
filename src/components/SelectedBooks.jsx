/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import App from "../pages/PagesToRead";
import { getIntoLocal } from "../utilities/ManageLocalStorage";
import SelectedBook from "./SelectedBook";

const SelectedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [sortOption, setSortOption] = useState("");
  const [ReadData, setReadData] = useState([]);
  const [WishData, setWishData] = useState([]);
  const [showData, setShowData] = useState([]);
  console.log(showData);
  App(ReadData);

  useEffect(() => {
    const loadReadIntoLocal = getIntoLocal("read");
    const loadWishIntoLocal = getIntoLocal("wish");
    setWishData(loadWishIntoLocal);
    setReadData(loadReadIntoLocal);
    setShowData(showDataToClick());
  }, []);

  const sortData = (data) => {
    switch (sortOption) {
      case "Rating":
        return data.sort((a, b) => b.rating - a.rating);
      // case "Number of page":
      //   return data.sort((a, b) => b.pages - a.pages);
      // case "Publish Year":
      //   return data.sort((a, b) => b.publishYear - a.publishYear);
      default:
        return data;
    }
  };
  const handleSortChange = (value) => {
    setSortOption(value);
  };
  const showDataToClick = () => {
    if (tabIndex === 0) {
      return sortData(ReadData);
    } else {
      return sortData(WishData);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <select className="select select-bordered w-[190px] common-color text-white">
          <option disabled selected className="text-white bg-gray-400">
            Sort By
          </option>
          <option
            onClick={() => handleSortChange("Rating")}
            className="bg-gray-400"
          >
            Rating
          </option>
          <option className="bg-gray-400">Number of page</option>
          <option className="bg-gray-400">Publish Year</option>
        </select>
      </div>
      <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start w-full flex-nowrap  mb-3">
        <Link
          onClick={() => setTabIndex(0)}
          to=""
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-b dark:border-gray-400 dark:text-gray-600  rounded-sm ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          onClick={() => setTabIndex(1)}
          to="/listed-book/wish"
          className={`flex items-center flex-shrink-0 px-5 py-3  rounded-sm space-x-2  dark:border-gray-400 dark:text-gray-600 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
        <div className="border-b mt-12 w-full dark:border-gray-400 dark:text-gray-600 "></div>
      </div>
      {showData.map((book) => (
        <SelectedBook key={Math.random()} book={book}></SelectedBook>
      ))}
    </div>
  );
};

export default SelectedBooks;
