import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

// const convertTime = time => new Date(Date.parse((time).replace(/-/g, '/'))).getTime();

const config = {
    plotOptions: {
        series: {
            animation: 1000,
        },
    },
    chart: {
        type: 'spline',
        height: 700,
    },
    title: { text: 'Sensor Data' },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 100,
        // minRange: 1000 * 60 * 0.1,
        // maxRange: 1000 * 60 * 0.1,
    },
    yAxis: [{
        title: {
            text: 'Temperature',
            style: { color: '#3FEB77', font: '13px sans-serif' },
        },
        min: -20,
        max: 50,
        plotLines: [{ value: 0, width: 1, color: '#3FEB77' }],
    }, {
        title: {
            text: 'Humidity',
            style: { color: '#4CCDEB', font: '13px sans-serif' },
        },
        min: 5,
        max: 80,
        // opposite: true,
        plotLines: [{ value: 0, width: 1, color: '#4CCDEB' }],
    }],
    series: [{
        name: 'Temperature',
        yAxis: 0,
        color: '#3FEB77',
        data: [],
    }, {
        name: 'Humidity',
        yAxis: 1,
        dashStyle: 'longdash',
        color: '#4CCDEB',
        data: [],
    }],
    credits: {
        enabled: false,
    },
};

class Chart extends Component {
    componentDidUpdate() {
        const { data } = this.props;
        console.log(`Update: temp: ${parseFloat(data.reverse()[0].temperature)}, humid: ${parseFloat(data.reverse()[0].humidity)}`);

        if (!data.reverse()[0]) {
            console.log('oops');
            return;
        }
        const chart = this.refs.chart.getChart();
        const shift = chart.series[0].data.length > 3600;
        const x = new Date().getTime();
        chart.series[0].addPoint({
            x,
            y: parseFloat(data.reverse()[0].temperature),
        }, true, shift);
        chart.series[1].addPoint({
            x,
            // x: convertTime(data.temperature.reverse()[0].time),
            y: parseFloat(data.reverse()[0].humidity),
        }, true, shift);
    }
    render() {
        return (
            <ReactHighcharts config={config} ref="chart" isPureConfig />
        );
    }
}

export default Chart;
