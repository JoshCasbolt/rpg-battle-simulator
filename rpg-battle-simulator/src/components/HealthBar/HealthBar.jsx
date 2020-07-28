import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100px;
  height: 200px;
  display: flex;
  justify-content: center;
`;
const HealthBox = styled.div`
  border: 1px solid black;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
const Health = styled.div`
  height: ${(props) => props.health}%;
  background-color: red;
  width: 100%;
  transition: 0.2s ease;
`;

function HealthBar(props) {
  const {
    health
  } = props;

  return (
    <Container>
      <HealthBox>
        <Health health={health} />
      </HealthBox>
    </Container>
  );
}

HealthBar.propTypes = {
  
};

export default HealthBar;