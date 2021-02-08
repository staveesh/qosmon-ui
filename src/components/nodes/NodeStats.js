import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
import moment from "moment";

export default function NodeStats({ data }) {
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
              {payload[0].name} : {payload[0].value.toLocaleString()} %
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
      <Row style={{ textAlign: "center" }}>
        <Col>
          <h5>
            <Link
              to={`/access-points/${data[0].deviceId}`}
              style={{ textDecoration: "underline" }}
            >{`${data[0].deviceId}`}</Link>
          </h5>
          <ResponsiveContainer width={"100%"} height={400}>
            <LineChart
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
                dataKey="battery"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Brush tickFormatter={xAxisTickFormatter} dataKey="time" />
            </LineChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    );
  return (
    <div>
      <h3>No data available.</h3>
    </div>
  );
}
