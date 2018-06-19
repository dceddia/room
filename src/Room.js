import React from 'react';

class Room extends React.Component {
  state = {
    isLit: false
  };

  toggleLight = () => {
    this.setState(state => ({
      isLit: !state.isLit
    }));
  };

  render() {
    const brightness = this.state.isLit ? 'lit' : 'dark';

    return (
      <div className={`room ${brightness}`}>
        <h3>a {brightness} room</h3>
        <button onClick={this.toggleLight}>Switch</button>
      </div>
    );
  }
}

export default Room;
