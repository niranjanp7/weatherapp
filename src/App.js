import React from 'react';

import './App.css';
import Navigation from "./components/navigation.js";
import Welcome from "./components/welcome.js"
import Footer from './components/footer.js';
import Report from './components/report.js';

let search = "S";

function Content(i) {
  return i.search?(<Report search={i.search} />):(<Welcome />);
}

function App() {
  return (
    <>
      <Navigation />
      <Content search={search} />
      <Footer />
    </>
  );
}

export default App;
