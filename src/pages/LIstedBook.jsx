import { createContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
export const TabContext = createContext("tabIndex");
const LIstedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div className="bg-gray-100 my-10 rounded-md py-5">
        <h1 className="text-3xl font-bold text-center">Books</h1>
      </div>
      <div className="text-center">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 common-color text-white"
          >
            Sort By <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content  z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
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
      <TabContext.Provider value={tabIndex}>
        <Outlet></Outlet>
      </TabContext.Provider>
    </div>
  );
};

export default LIstedBook;
