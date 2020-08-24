import React from 'react';
import leftPad from '../utils/leftPad';

class TimeElapsed extends React.Component {
    getUnits() {
        const seconds = this.props.timeElapsed / 1000;
        return {
            min: Math.floor(seconds / 60).toString(),
            sec: Math.floor(seconds % 60).toString(),
            msec: (seconds % 1).toFixed(3).substring(2)
        };
    }
    render() {
        const units = this.getUnits();
        return (
            <div id={this.props.id}>
                <span>{leftPad(2, units.min)}</span>
                <span>:</span>
                <span>{leftPad(2, units.sec)}</span>
                <span>:</span>
                <span>{units.msec}</span>
            </div>
        );
    }
}

export default TimeElapsed;