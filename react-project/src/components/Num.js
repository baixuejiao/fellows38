import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddActionCreator, ReduceActionCreator } from '../store'

function mapStateToProps(state) {
  return {
    num: state.number
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => {
      dispatch(AddActionCreator(3))
    },
    reduce: () => {
      dispatch(ReduceActionCreator())
    }
  };
}

class Num extends Component {
  render() {
    return (
      <div>
        <p>计数器</p>
        <p>num:{this.props.num}</p>
        <button onClick={this.props.add}>加法</button>
        <button onClick={this.props.reduce}>减法</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Num);