import React from 'react';

import './App.css';
import Navigation from "./components/navigation.js";
import Footer from './components/footer.js';
import Api from './components/api.js';

class App extends React.Component{
  constructor(p){
    super(p);
    this.state = {search: ""};
  }
  SetSearchVal = (val) => {this.setState({search: val});};
  render(){
    return(
      <>
        <Navigation setsearchval={this.SetSearchVal} />
        <Api search={this.state.search} />
        <Footer />
      </>
    );
  }
}
export default App;
