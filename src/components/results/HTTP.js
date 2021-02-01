import { React } from "react";
import moment from "moment";
import "../../styles/components/HTTP.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from "recharts";

export default function HTTP(props) {
  const data = props.data;

  const CustomizedAxisTick = ({ x, y, payload }) => {
    const dateTip = moment(payload.value).format("lll");
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={23}
          y={0}
          dy={14}
          fontSize="0.90em"
          fontFamily="bold"
          textAnchor="end"
          fill="#363636"
        >
          {dateTip}
        </text>
      </g>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    const dateTip = moment(label).format("lll");
    const formattedDate = dateTip;
    if (payload === null || payload === undefined) return null;
    if (active)
      return (
        <div className="custom-tooltip">
          <p className="label-tooltip">{`${formattedDate}`}</p>
          <p className="desc-tooltip">
            <span className="value-tooltip">
              {payload[0].name} : {payload[0].value.toLocaleString()} ms
            </span>
            <br />
            <span className="value-tooltip">
              httpResultCode : {payload[0].payload.httpResultCode}
            </span>
          </p>
        </div>
      );
    return null;
  };

  const xAxisTickFormatter = (timestamp_measured) => {
    return moment(timestamp_measured).format("lll");
  };
  if (data && data.length > 0)
    return (
      <div>
        <h3>{`Time taken for HTTP download: ${data[0].target}`}</h3>
        <h5>{`Job ID : ${data[0].taskKey}`}</h5>
        <LineChart
          width={900}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={CustomizedAxisTick} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} animationDuration={0} />
          <Legend />
          <Line
            type="monotone"
            dataKey="timeTakenMs"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Brush tickFormatter={xAxisTickFormatter} dataKey="time" />
        </LineChart>
      </div>
    );
  return (
    <div>
      <h3>No data available.</h3>
    </div>
  );
}
