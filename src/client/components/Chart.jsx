import React from 'react';
import { Line } from 'react-chartjs-2';

const chartData = (data) => {
    const pointsData = data.map(singleData => ({
        x: new Date(),
        y: singleData,
    }));

    return {
        labels: [],
        datasets: [
            {
                label: 'Temperature',
                data: pointsData,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                ],
                fill: false,
            },
        ],
    };
};

const Chart = props => (
    <Line 
        data={chartData(props.data)} 
        width={200}
        height={500}
        options={{ 
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    time: {
                        unit: 'second'
                    },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        stepSize: .2
                    }
                }]
            }
        }}
    />
);

export default Chart;
