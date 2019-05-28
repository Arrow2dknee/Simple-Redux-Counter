// a presentation component
import React from 'react';
import PropTypes from 'prop-types';

function IncrementButton(props) {
  return (
    <div>
      <p>{props.number}</p>
      <button onClick={props.buttonHandler}>Add Five</button>
    </div>
  )
}
IncrementButton.propTypes = {
  number: PropTypes.number.isRequired,
  buttonHandler: PropTypes.func.isRequired
}
export default IncrementButton;