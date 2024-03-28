import { Link } from "react-router-dom";

const NoDataAvailable = () => {
  return (
    <section className="flex items-center h-full my-7 p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md  text-center">
          <h2 className="mb-8 font-extrabold text-4xl dark:text-gray-400">
            No Data Available !
          </h2>

          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded dark:bg-[#23be0a] dark:text-gray-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoDataAvailable;
