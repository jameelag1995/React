import "./Box.css";
import React from "react";

class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            boxNum: 0,
        };
    }
 
    shouldComponentUpdate() {
        return true;
    }

    ComponentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        if (prevState.boxNum != this.state.boxNum) {
            const intervalid = setInterval(() => {
                if (this.state.boxNum < 2) {
                    this.setState((prevState) => {
                        return { boxNum: prevState.boxNum + 1 };
                    });
                }
            }, 5000);
            return () => {
                clearInterval(intervalid);
            };
        }
    }
    render() {
        return (
            <div className="BoxAnimation">
                {/* <div className="box"></div> */}
                {this.state.boxNum === 0 ? <div className="box"></div> : ""}
                {this.state.boxNum === 1 ? <div className="box2"></div> : ""}
                {this.state.boxNum === 2 ? <div className="box3"></div> : ""}
            </div>
        );
    }
}

export default Box;
