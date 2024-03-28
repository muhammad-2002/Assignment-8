/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import NoDataAvailable from "../components/NoDataAvailable";
import { getIntoLocal } from "../utilities/ManageLocalStorage";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip flex flex-col rounded-lg bg-white">
        <p className="label">{`${label}`}</p>
        <p className="label"> page:{`${payload[0].value}`}</p>
        <br></br>
      </div>
    );
  }

  return null;
}

export default function App() {
  const data = getIntoLocal("read");
  const [localData, setLocalData] = useState([]);
  useEffect(() => {
    setLocalData(data);
  }, []);
  if (localData.length < 1) {
    return <NoDataAvailable></NoDataAvailable>;
  } else {
    return (
      <div className="border border-solid my-4 rounded-sm ">
        <div style={{ width: "100%", height: "400px" }}>
          <ResponsiveContainer>
            <BarChart
              width={1100}
              height={400}
              data={data}
              margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bookName" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="totalPages"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={colors[index % 20]} />
                ))}
              </Bar>
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
