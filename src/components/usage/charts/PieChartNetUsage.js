import {
    PieChart, Pie, Cell, Tooltip
} from 'recharts';
import { getNrandomColors } from '../../../utils/RandomColors';

export default function PieChartNetUsage(props) {

    const COLORS = getNrandomColors(props.data.length);

    return (
    
        <PieChart width={280} height={400} >
            <Pie
            data={props.data}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey={props.dataKey}
            label>
            {
                props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            </Pie>
            <Tooltip/>
        </PieChart>
    )
}
