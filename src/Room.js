import React from 'react';
import { connect } from 'react-redux';

class Room extends React.Component {
  toggleLight = () => {
    this.props.dispatch({ type: 'TOGGLE_LIGHT' });
  };

  render() {
    const brightness = this.props.isLit ? 'lit' : 'dark';

    return (
      <div className={`room ${brightness}`}>
        <h3>a {brightness} room</h3>
        <button onClick={this.toggleLight}>Switch</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLit: state.isLit
});

export default connect(mapStateToProps)(Room);
