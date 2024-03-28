/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { image, bookName, tags, author, category, rating, bookId } = book;
  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="card bg-base-100 shadow-xl flex cursor-pointer flex-col justify-center items-center">
        <figure className="  bg-[#F3F3F3] py-8 p-14 w-[90%] mt-7 h-[200px] rounded-md flex justify-end">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl  w-1/2 object-cover "
          />
        </figure>
        <div className="card-body w-full justify-start  ">
          <p className="space-x-4 text-[#23BE0A] font-bold">
            {tags.map((tag) => ` #${tag}`)}
          </p>
          <h2 className="card-title font-playfair text-2xl h-14  ">
            {bookName}
          </h2>
          <p className="text-[18px] font-semibold">By:{author}</p>
          <div className="flex justify-between items-center   text-bold">
            <p>{category}</p>
            <div>
              <p className="">
                {rating}{" "}
                <span className="inline-block">
                  <FaRegStar />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
