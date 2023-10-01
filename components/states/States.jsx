import React from 'react';
import './States.css';

class States extends React.Component {
  constructor(props) {
    super(props);
this.state = {
  val: '',
};
}

function = () => {
  var li=[];
  const { val } = this.state;
  li=window.models.states().filter((state) =>  state.toLowerCase().includes(val)  );
  return li;
  };

handlingChange = (e) => {
this.setState({ val: e.target.value.toLowerCase() });
};

render() {
const filteredStates = this.function();

return (
  <div>
    <h1>States View</h1>
    <input
      type="text"
      placeholder="Enter Text"
      value={this.state.val}
      onChange={this.handlingChange}
    />
    <p>You can see the output after entering</p>

    {filteredStates.length !== 0 ? (
      <ul>
      {filteredStates.map((state, ind) => (
        <li key={ind}>{state}</li>
      ))}
      </ul>
    ) : (<p>No states with mentioned words</p>
      
    )}
  </div>
);
}
}

export default States;