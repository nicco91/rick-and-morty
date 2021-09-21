import Title from 'components/UI/Title';
import React from 'react';
import styled from 'styled-components';

const AppHeaderWrapper = styled.div`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AppHeader = () => {
  return (
    <AppHeaderWrapper className="AppHeader">
      <Title>Rick and Morty characters</Title>
    </AppHeaderWrapper>
  );
};

export default AppHeader;
