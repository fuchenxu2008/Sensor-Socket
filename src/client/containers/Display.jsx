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
                <ul>
                    {this.props.sensorData.temperature.map((temperature, index) => (
                        <Message message={temperature} type="temperature" key={index} />
                    ))}
                    {this.props.sensorData.humidity.map((humidity, index) => (
                        <Message message={humidity} type="humidity" key={index} />
                    ))}
                </ul>
            </div>
        );
    }
}

Display.propTypes = {
    sensorData: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
    sensorData: state.sensorData,
});

export default connect(mapStateToProps)(Display);
