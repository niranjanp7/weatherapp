import React from 'react';
import Generate from './result';

class Api extends React.Component {
    constructor(props){
        super(props);
        this.state={date: new Date(), data: {e: 0}, status: true, querry: this.props.search};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
        this.dataID = setInterval(() => this.getData(), 5000);
        this.refreshQuerryID = setInterval(() => this.refreshQuerry(), 500);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
        clearInterval(this.dataID);
        clearInterval(this.refreshQuerryID);
    }
    refreshQuerry() {
        if (this.state.querry != this.props.search)
            this.setState({querry: this.props.search});
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    getData() {
        if (this.props.search){
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.props.search + "&APPID=8bd4d6a9a95aadd819800ea99b951a8e")
            .catch(()=>{this.setState({status:false})})
            .then(res => res.json())
            .then(r => {this.setState({data: r, status: true})});
        }
    }
    render() {
        return (
            <main className="relative flex justify-center items-center h-60v bg-gradient-to-b from-sky-300 to-sky-700">
                <div className="h-3/4 w-3/4 max-w-3xl bg-white bg-opacity-20 rounded-xl z-10 px-4 hidden justify-center items-center text-3xl text-white">
                    {this.state.status?"Online!":"Offline"}
                </div>
                <Generate data={this.state.data} search={this.props.search}/>
                <div className={"absolute top-0 left-0 w-full h-full bg-red-600 bg-opacity-50 z-10" + (this.state.status?" hidden":" block")}>No Network</div>
            </main>
        );
    }
}

export default Api;