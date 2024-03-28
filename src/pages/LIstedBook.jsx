import { Outlet } from "react-router-dom";

const LIstedBook = () => {
  // const [readData, setReadData] = useState([]);
  // const [wishData, setWishData] = useState([]);
  // useEffect(() => {
  //   const getReadForLocal = getIntoLocal("read");
  //   const getWishForLocal = getIntoLocal("wish");
  //   setWishData(getWishForLocal);
  //   setReadData(getReadForLocal);
  // }, []);

  return (
    <div>
      <div className="bg-gray-100 my-10 rounded-md py-5">
        <h1 className="text-3xl font-bold text-center">Books</h1>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default LIstedBook;
