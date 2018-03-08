import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from '../components/Message';
import Chart from '../components/Chart';

class Display extends Component {
    componentWillMount() {
        /* eslint-disable no-console */
        console.log(`Mount: ${this.props.messages}`);
    }

    render() {
        return (
            <div>
                <Chart data={this.props.messages} />
                <ul>
                    {this.props.messages.map(message => (
                        <Message message={message} key={message} />
                    ))}
                </ul>
            </div>
        );
    }
}

Display.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = state => ({
    messages: state.sensorData.data,
});

export default connect(mapStateToProps)(Display);
