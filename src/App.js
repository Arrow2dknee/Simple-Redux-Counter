// a container component
import React from 'react';
import IncrementButton from './IncrementButton';
import { connect } from 'react-redux';
import { fiveMultiplier } from './actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Simplest redux example</h1>
        <IncrementButton number={this.props.number} buttonHandler={this.props.buttonHandler}/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    number: state.number
  }
}
function mapDispatchToProps(dispatch) {
  return {
    buttonHandler: () => dispatch(fiveMultiplier)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);