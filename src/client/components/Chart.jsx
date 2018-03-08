import React from 'react';
import { Line } from 'react-chartjs-2';

const chartData = (data) => {
    const temperatureData = data.temperature.map(temperature => ({
        x: temperature.time,
        y: temperature.value,
    }));

    const humidityData = data.humidity.map(humidity => ({
        x: humidity.time,
        y: humidity.value,
    }));

    return {
        labels: [],
        datasets: [
            {
                label: 'Temperature',
                data: temperatureData,
                backgroundColor: [
                    'rgb(19, 0, 132)',
                ],
                fill: false,
            },
            {
                label: 'Humidity',
                data: humidityData,
                backgroundColor: [
                    'rgb(255, 255, 132)',
                ],
                // fill: false,
            },
        ],
    };
};

const Chart = props => (
    <Line 
        data={chartData(props.data)}
        options={{ 
            maintainAspectRatio: true,
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'time'
                    }
                }]
            }
        }}
    />
);

export default Chart;
