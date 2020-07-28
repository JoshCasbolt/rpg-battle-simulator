import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

Interface.propTypes = {
  
};

function Interface(props) {
  const {
    buttonHandler,
  } = props;

  return (
    <div>
      <h2>You hit for 5!</h2>
      <Button buttonHandler={buttonHandler}/>
    </div>
  );
}

export default Interface;