import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => console.log(this.props)}>Click Me</button>
      </div>
    );
  }
}

export default App;
