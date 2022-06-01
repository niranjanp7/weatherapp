import React from "react";
import Generate from "./result";

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {}, status: true, querry: this.props.search, countDown: 10, loading: false };
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
        this.refreshQuerryID = setInterval(() => this.refreshQuerry(), 500);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
        clearInterval(this.refreshQuerryID);
    }
    tick() {
        this.setState({
            countDown: this.state.countDown - 1,
        });
        if (this.state.countDown < 0) {
            this.setState({ countDown: 10 });
        }
        if (this.state.countDown === 0) {
            this.setState({ loading: true });
            this.getData();
        }
    }
    refreshQuerry() {
        if (this.props.search !== this.state.querry) {
            this.setState({ querry: this.props.search });
            this.getData();
        }
    }
    getData() {
        if (this.props.search) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                    this.props.search +
                    "&APPID=8bd4d6a9a95aadd819800ea99b951a8e"
            )
                .catch(() => {
                    this.setState({ status: false });
                })
                .then((res) => res.json())
                .then((r) => {
                    this.setState({ data: r, status: true });
                })
                .finally(() => {
                    this.setState({ loading: false, countDown: 10 });
                });
        }
    }
    render() {
        return (
            <main className="relative flex justify-center items-center h-60v bg-gradient-to-b from-sky-300 to-sky-700 px-1">
                <Generate
                    data={this.state.data}
                    search={this.props.search}
                    countDown={this.state.countDown}
                    status={this.state.status}
                    loading={this.state.loading}
                />
            </main>
        );
    }
}

export default Api;
