import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from '../components/Message';
import Chart from '../components/Chart';

class Display extends Component {
    componentWillMount() {
        /* eslint-disable no-console */
        console.log(`Mount: ${this.props.sensorData}`);
    }

    render() {
        return (
            <div>
                <Chart data={this.props.sensorData} />
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Temperature</th>
                            <th>Humidity</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.sensorData.map(data => (
                                <tr key={data.time}>
                                    <td>{data.temperature}</td>
                                    <td>{data.humidity}</td>
                                    <td>{data.time}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

Display.propTypes = {
    sensorData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
    sensorData: state.sensorData.dataSet,
});

export default connect(mapStateToProps)(Display);
