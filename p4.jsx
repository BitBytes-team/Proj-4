import React from 'react';
import ReactDOM from 'react-dom';

import States from './components/states/States';
// eslint-disable-next-line import/no-unresolved
import Header from './components/header/header';
import Example from './components/example/Example';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        displayExample: true,
      };
    }
  
    toggleDisplay = () => {
      this.setState((prevState) => ({
        displayExample: !prevState.displayExample,
      }));
    };
  
    render() {
      const { displayExample } = this.state;
      return (
        <div>
          <button onClick={this.toggleDisplay}>
            Switch to {displayExample ? 'States' : 'Example'}
          </button>
          {displayExample ? <Example /> : <States />}
        </div>
      );
    }
  }

ReactDOM.render(
    <div>
        <Header/>
        <hr></hr>
    <App/>
    </div>,
    document.getElementById('reactapp'),
  );