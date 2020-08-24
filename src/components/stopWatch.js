import React from 'react';
import TimeElapsed from './timeElapsed';
import './stopWatch.style.scss';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);

        ["update", "reset", "toggle"].forEach((method) => {
            this[method] = this[method].bind(this);
        });

        this.state = this.initialState = {
            isRunning: false,
            timeElapsed: 0,
        };
    }

    toggle() {
        this.setState({ isRunning: !this.state.isRunning }, () => {
            this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
        });
    }

    reset() {
        clearInterval(this.timer);
        this.setState(this.initialState);
    }

    startTimer() {
        this.startTime = Date.now();
        this.timer = setInterval(this.update, 10);
    }

    update() {
        const delta = Date.now() - this.startTime;
        this.setState({ timeElapsed: this.state.timeElapsed + delta });
        this.startTime = Date.now();
    }

    render() {
        const { isRunning, timeElapsed } = this.state;
        return (
            <div>
                <h1>STOP WATCH</h1>
                <TimeElapsed id="timer" timeElapsed={timeElapsed} />
                <div className="button-container">
                    <button onClick={this.toggle}>{isRunning ? 'Stop' : 'Start'}</button>
                    <button onClick={this.reset} disabled={isRunning}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Stopwatch;