import React from "react";
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    handleDecrease = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            };
        });
    };
    handleIncrease = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        });
    };
    render() {
        return (
            <>
                <h1>Counter Exercise with class component </h1>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.handleDecrease}>Decrease Count</button>
                <button onClick={this.handleIncrease}>Increase Count</button>
            </>
        );
    }
}
export default Counter