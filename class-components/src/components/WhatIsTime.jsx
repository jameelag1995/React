import React from "react";

class WhatIsTime extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
        };
    }
    handleChange = (changeId,value) => {
        let seconds, minutes, hours;
       console.log(typeof value);
       console.log(typeof changeId);
        if (changeId === 1) {
            seconds = parseInt(value);
            console.log(typeof seconds);
            minutes = seconds / 60;
            hours = seconds / (60 * 60);
        } else if (changeId === 2) {
            minutes = parseInt(value);
            seconds = minutes * 60;
            hours = minutes / 60;
        } else {
            hours = parseInt(value);
            minutes = hours * 60;
            seconds = hours * 60 * 60;
        }
        const newState = {
            seconds,
            minutes,
            hours,
        };
        console.log(newState);
        this.setState(newState);
    };
    render() {
        return (
            <>
                <h1>What is Time?</h1>
                {/* <form onSubmit={handleSubmit}> */}
                    <label>Seconds: </label>
                    <input
                        type="number"
                        value={this.state.seconds}
                        onChange={(e) => this.handleChange(1,e.target.value)}
                    />
                    <label>Minutes: </label>
                    <input
                        type="number"
                        value={this.state.minutes}
                        onChange={(e) => this.handleChange(2,e.target.value)}
                    />
                    <label>Hours: </label>
                    <input
                        type="number"
                        value={this.state.hours}
                        onChange={(e) => this.handleChange(3,e.target.value)}
                    />
                {/* </form> */}
            </>
        );
    }
}
export default WhatIsTime;
