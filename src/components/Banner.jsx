import { Link } from "react-router-dom";
import image from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-gray-100 flex justify-evenly flex-col-reverse md:flex-row items-center  mx-auto gap-7 rounded-lg p-5 px-16  my-10">
      <div>
        <h1 className="font-playfair text-5xl  md:text-6xl font-bold">
          Books to freshen up your bookshelf
        </h1>
        <Link to="/listed-book">
          <button className=" text-bold px-4 py-2 outline-none common-color text-white text-bold mt-5 rounded-md">
            View The List
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 border-2 ">
        <img src={image} className=" " alt="Banner"></img>
      </div>
    </div>
  );
};

export default Banner;
