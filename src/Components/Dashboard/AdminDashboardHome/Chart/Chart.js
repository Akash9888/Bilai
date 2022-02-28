// import React, { PureComponent } from 'react';






// export default class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

//     render() {
//         return (
//             <ResponsiveContainer width="100%" height="100%">
//                 <PieChart width={400} height={400}>
//                     <Pie
//                         data={data}
//                         cx="50%"
//                         cy="50%"
//                         labelLine={false}
//                         label={renderCustomizedLabel}
//                         outerRadius={80}
//                         fill="#8884d8"
//                         dataKey="value"
//                     >
//                         {data.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                     </Pie>
//                 </PieChart>
//             </ResponsiveContainer>
//         );
//     }
// }
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
const Chart = ({ totalBalance, totalAppointment }) => {
    const data = [
        { name: 'totalBalance', value: totalBalance.length },
        { name: 'totalAppointment', value: totalAppointment.length },
        { name: 'Group C', value: 6 },
        { name: 'Group D', value: 8 },
    ];
    return (

        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>

    );
};

export default Chart;