/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars, react/prop-types
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
const SelectedBook = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    bookId,
  } = book;

  return (
    <div className="flex flex-col divide-y dark:divide-gray-300 w-full rounded-lg my-6 pl-6  border">
      <div className="flex flex-col py-6 sm:flex-row sm:justify-between">
        <div className="flex w-full md:flex-row flex-col justify-between space-x-2 gap-6 sm:space-x-4">
          <div className="object-cover flex justify-center items-center rounded-lg   dark:bg-gray-200 border">
            <img
              className=" p-6  dark:border-rounded outline-none h-[250px] w-[300px]   "
              src={image}
              alt="Polaroid camera"
            />
          </div>
          <div className="flex flex-col gap-6 w-full ">
            <div className="flex justify-start md:justify-between w-full pb-2 space-x-2">
              <div className="space-y-4">
                <h3 className="text-3xl font-playfair font-semibold leading-snug sm:pr-8">
                  {bookName}
                </h3>
                <p className="text-sm font-bold dark:text-gray-600">
                  By: {author}
                </p>
                <div className="flex md:flex-row flex-col gap-2 items-start md:items-center ">
                  <p className="text-md text-[#23be0a] font-bold  gap-6 flex items-center">
                    <span className=" text-black"> Tags:</span>{" "}
                    <span>#{tags[0]} </span>
                    <span>#{tags[1]}</span>
                  </p>
                  <p>
                    <CiLocationOn />
                  </p>
                  <p>Year of Publishing:{yearOfPublishing}</p>
                </div>
                <div className=" flex gap-0 md:gap-4 text-base px-6 md:px-0">
                  <p className="flex items-start  md:items-center gap-3">
                    <IoPeopleSharp />
                    Publisher: Scribner:{publisher}
                  </p>
                  <p className="flex items-center gap-2">
                    <MdOutlineContactPage /> Pages:{totalPages}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:gap-4 gap-1 -pl-6 md:flex-row pr-5 text-sm divide-x">
              <button
                type="button"
                className="flex items-center px-3 py-2 text-[#328EFF] font-bold bg-[#328EFF26] p-1 rounded-lg space-x-1"
              >
                <span>Category:{category}</span>
              </button>
              <button
                type="button"
                className="flex items-center px-3 py-2 text-[#FFAC33] font-bold bg-[#FFAC3326] p-1 rounded-lg space-x-1"
              >
                <span>Rating:{rating}</span>
              </button>
              <Link to={`/book-details/${bookId}`}>
                <button
                  type="button"
                  className="flex items-center px-3 py-2 text-white font-bold bg-[#23BE0A] p-1 rounded-lg space-x-1"
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedBook;
