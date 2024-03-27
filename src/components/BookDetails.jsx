import { useLoaderData, useParams } from "react-router-dom";
import {
  setDataIntoWishList,
  setIntoLocal,
} from "../utilities/ManageLocalStorage";

const BookDetails = () => {
  const books = useLoaderData();
  console.log(books);

  const { id } = useParams();

  const booksId = books.find((book) => book.bookId === parseInt(id));

  const {
    image,
    bookName,
    tags,
    author,
    category,
    review,
    publisher,
    totalPages,
    rating,
    yearOfPublishing,
  } = booksId;
  const handleRead = (b) => {
    console.log(b);
    setIntoLocal(b);
  };
  const handleWishList = (b) => {
    console.log(b);
    setDataIntoWishList(b);
  };
  return (
    <section className=" w-full mx-auto ">
      <div className="container flex flex-col items-start justify-center p-6 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
        <div className="dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-1/2 rounded-lg">
          <img
            src={image}
            alt=""
            className="object-contain p-5  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center pt-0 p-3 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left items-start w-[45%] space-y-2">
          <h1 className="text-2xl  font-bold leading-none sm:text-2xl">
            {bookName}
          </h1>
          <p className="text-lg ">By:{author}</p>
          <hr className="border-dashed border-gray-500 border-1 w-full"></hr>
          <div className="py-1">{category}</div>
          <hr className="border-dashed border-gray-500 border-1 w-full"></hr>
          <p>
            <span className="font-bold">Review :</span> {review}
          </p>
          <div className="flex gap-4 ">
            <span className="font-bold space-x-3">Tag:</span>{" "}
            {tags.map((t) => (
              <p className=" text-[#23be0a] font-bold" key={Math.random()}>
                #{t}
              </p>
            ))}
          </div>

          <hr className="border-dashed border-gray-500 border-1 w-full"></hr>
          <div className="w-[60%]">
            <div className="flex justify-between items-center ">
              <p className=" ">Number Of Pages:</p>
              <p className="font-bold">{totalPages}</p>
            </div>
            <div className="flex justify-between items-center ">
              <p className=" ">Publisher:</p>
              <p className="font-bold">{publisher}</p>
            </div>
            <div className="flex justify-between items-center ">
              <p className=" ">Year of Publishing:</p>
              <p className="font-bold">{yearOfPublishing}</p>
            </div>
            <div className="flex justify-between items-center ">
              <p className=" ">Rating:</p>
              <p className="font-bold">{rating}</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              onClick={() => handleRead(booksId)}
              className="px-8 py-3 text-lg font-semibold border rounded cursor-pointer dark:border-gray-800 hover:bg-[#23be0a] hover:text-white hover:border-white"
            >
              Read
            </a>
            <a
              onClick={() => handleWishList(booksId)}
              className="px-8 py-3 text-lg font-semibold rounded bg-blue-400 cursor-pointer dark:text-gray-50"
            >
              Wishlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
