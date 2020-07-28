import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  
};

function Button(props) {
  const {
    buttonHandler,
  } = props;
  return (
    <button onClick={() => buttonHandler()}>
      Hello
    </button>
  );
}

export default Button;