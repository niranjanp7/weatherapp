import React from 'react';
import Generate from './result';

class Api extends React.Component {
    constructor(props){
        super(props);
        this.state={date: new Date(), data: {e: 0}, status: true};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
        this.dataID = setInterval(() => this.getData(), 5000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
        clearInterval(this.dataID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    getData() {
        /*fetch("https://api.openweathermap.org/data/2.5/weather?q=Faridabad,in&APPID=8bd4d6a9a95aadd819800ea99b951a8e")
        .catch(()=>{this.setState({status:false})})
        .then(res => res.json())
        .then(r => {this.setState({data: r, status: true})});*/
        this.setState({data: {"coord":{"lon":77.3167,"lat":28.4333},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":285.29,"feels_like":284.23,"temp_min":285.29,"temp_max":285.29,"pressure":1014,"humidity":64,"sea_level":1014,"grnd_level":990},"visibility":10000,"wind":{"speed":2.32,"deg":276,"gust":3.59},"clouds":{"all":5},"dt":1643034193,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1642988529,"sunset":1643026980},"timezone":19800,"id":1271951,"name":"Faridabad","cod":200}});
    }
    render() {
        /*return (
            <>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <h6>{this.state.data.wind.speed}</h6>
            </>
        );*/
        return (
            <main className="relative flex justify-center items-center h-60v bg-gradient-to-b from-sky-300 to-sky-700">
                <div className="h-3/4 w-3/4 max-w-3xl bg-white bg-opacity-20 rounded-xl z-10 px-4 hidden justify-center items-center text-3xl text-white">
                    {this.state.status?"Online!":"Offline"}
                </div>
                <Generate data={this.state.data}/>
                <div className={"absolute top-0 left-0 w-full h-full bg-red-600 bg-opacity-50 z-10" + (this.state.status?" hidden":" block")}>No Network</div>
            </main>
        );
    }
}

export default Api;