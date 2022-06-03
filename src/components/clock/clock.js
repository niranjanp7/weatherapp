import React from "react";
import "./clock.css";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hour: 0, minute: 0, second: 0};
    }

    componentDidMount() {
        this.clockTickID = setInterval(this.clockTick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTickID);
    }

    clockTick() {
        const time = new Date();
        time.setTime(
            time.getTime() +
                time.getTimezoneOffset() * 60000 + this.props.utc
        );

        this.setState({ hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() });
    }

    render() {
        let hour = this.state.hour;
        let minute = this.state.minute;
        let second = this.state.second;
        return (
            <div className="clock" style={{ "--hour": { hour }, "--minute": { minute }, "--second": { second } }}>
                <div className="minute-ind" style={{ "--i": 0 }}></div>
                <div className="minute-ind" style={{ "--i": 1 }}></div>
                <div className="minute-ind" style={{ "--i": 2 }}></div>
                <div className="minute-ind" style={{ "--i": 3 }}></div>
                <div className="minute-ind" style={{ "--i": 4 }}></div>
                <div className="minute-ind" style={{ "--i": 5 }}></div>
                <div className="minute-ind" style={{ "--i": 6 }}></div>
                <div className="minute-ind" style={{ "--i": 7 }}></div>
                <div className="minute-ind" style={{ "--i": 8 }}></div>
                <div className="minute-ind" style={{ "--i": 9 }}></div>
                <div className="minute-ind" style={{ "--i": 10 }}></div>
                <div className="minute-ind" style={{ "--i": 11 }}></div>
                <div className="minute-ind" style={{ "--i": 12 }}></div>
                <div className="minute-ind" style={{ "--i": 13 }}></div>
                <div className="minute-ind" style={{ "--i": 14 }}></div>
                <div className="minute-ind" style={{ "--i": 15 }}></div>
                <div className="minute-ind" style={{ "--i": 16 }}></div>
                <div className="minute-ind" style={{ "--i": 17 }}></div>
                <div className="minute-ind" style={{ "--i": 18 }}></div>
                <div className="minute-ind" style={{ "--i": 19 }}></div>
                <div className="minute-ind" style={{ "--i": 20 }}></div>
                <div className="minute-ind" style={{ "--i": 21 }}></div>
                <div className="minute-ind" style={{ "--i": 22 }}></div>
                <div className="minute-ind" style={{ "--i": 23 }}></div>
                <div className="minute-ind" style={{ "--i": 24 }}></div>
                <div className="minute-ind" style={{ "--i": 25 }}></div>
                <div className="minute-ind" style={{ "--i": 26 }}></div>
                <div className="minute-ind" style={{ "--i": 27 }}></div>
                <div className="minute-ind" style={{ "--i": 28 }}></div>
                <div className="minute-ind" style={{ "--i": 29 }}></div>
                <div className="minute-ind" style={{ "--i": 30 }}></div>
                <div className="minute-ind" style={{ "--i": 31 }}></div>
                <div className="minute-ind" style={{ "--i": 32 }}></div>
                <div className="minute-ind" style={{ "--i": 33 }}></div>
                <div className="minute-ind" style={{ "--i": 34 }}></div>
                <div className="minute-ind" style={{ "--i": 35 }}></div>
                <div className="minute-ind" style={{ "--i": 36 }}></div>
                <div className="minute-ind" style={{ "--i": 37 }}></div>
                <div className="minute-ind" style={{ "--i": 38 }}></div>
                <div className="minute-ind" style={{ "--i": 39 }}></div>
                <div className="minute-ind" style={{ "--i": 40 }}></div>
                <div className="minute-ind" style={{ "--i": 41 }}></div>
                <div className="minute-ind" style={{ "--i": 42 }}></div>
                <div className="minute-ind" style={{ "--i": 43 }}></div>
                <div className="minute-ind" style={{ "--i": 44 }}></div>
                <div className="minute-ind" style={{ "--i": 45 }}></div>
                <div className="minute-ind" style={{ "--i": 46 }}></div>
                <div className="minute-ind" style={{ "--i": 47 }}></div>
                <div className="minute-ind" style={{ "--i": 48 }}></div>
                <div className="minute-ind" style={{ "--i": 49 }}></div>
                <div className="minute-ind" style={{ "--i": 50 }}></div>
                <div className="minute-ind" style={{ "--i": 51 }}></div>
                <div className="minute-ind" style={{ "--i": 52 }}></div>
                <div className="minute-ind" style={{ "--i": 53 }}></div>
                <div className="minute-ind" style={{ "--i": 54 }}></div>
                <div className="minute-ind" style={{ "--i": 55 }}></div>
                <div className="minute-ind" style={{ "--i": 56 }}></div>
                <div className="minute-ind" style={{ "--i": 57 }}></div>
                <div className="minute-ind" style={{ "--i": 58 }}></div>
                <div className="minute-ind" style={{ "--i": 59 }}></div>
                <div className="gmt">{this.props.gmt}</div>
                <div className="time-period">{hour < 12 ? "AM" : "PM"}</div>
                <div
                    className="hour-hand"
                    style={{
                        transform: "translateY(-50%) rotate(calc(" + hour + " * 30deg + " + minute + " * .5deg))",
                    }}
                ></div>
                <div
                    className="minute-hand"
                    style={{
                        transform: "translateY(-50%) rotate(calc(" + minute + " * 6deg + " + second + " * .1deg))",
                    }}
                ></div>
                <div
                    className="second-hand"
                    style={{ transform: "translateY(-40%) rotate(calc(" + second + " * 6deg))" }}
                ></div>
            </div>
        );
    }
}

export default Clock;
