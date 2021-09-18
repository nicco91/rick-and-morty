import Title from 'components/UI/Title';
import React from 'react';
import styled from 'styled-components';

const AppHeaderWrapper = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppHeader = () => {
  return (
    <AppHeaderWrapper className="AppHeader">
      <Title>Rick and Morty characters</Title>
    </AppHeaderWrapper>
  );
};

export default AppHeader;
