import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom'; // Import HashRouter, Route, and Link
import States from './components/states/States';
// eslint-disable-next-line import/no-unresolved
import Header from './components/header/header';
import Example from './components/example/Example';
class App extends React.Component {
    render() {
      return (
        <HashRouter>
          <div>
  <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px',backgroundColor:'#9ECD17'}}>
    <div style={{ marginRight: '20px', padding: '10px' }}>
      <Link to="/example" style={{ textDecoration: 'none', color: 'darkblue', fontSize: '27px', fontWeight: 'bold' }}>Example</Link>
    </div>

    <div style={{  padding: '10px' }}>
      <Link to="/states" style={{ textDecoration: 'none', color: 'darkblue', fontSize: '27px', fontWeight: 'bold' }}>States</Link>
    </div>
  </nav>


  
            <Route path="/example" component={Example} />
            <Route path="/states" component={States} />
          </div>
        </HashRouter>
      );
    }
  }
  ReactDOM.render(
    <div>
      <Header />
      <hr />
      <App />
    </div>,
    document.getElementById('reactapp')
  );
    