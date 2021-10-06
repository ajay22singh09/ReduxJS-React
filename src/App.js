import './App.css';
import Header from './components/nav.js';
import Routes from './components/route.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes />
        </div>
      </Router>
    );
  }
}
export default App;
