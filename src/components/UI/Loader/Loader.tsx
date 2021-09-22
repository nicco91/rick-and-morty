import React from 'react';
import logo from 'assets/logo.png';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
`;

const LoaderSpinner = styled.div`
  > img {
    width: 100px;
    height: auto;
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper className="Loader">
      <LoaderSpinner className="ld ld-tremble">
        <img src={logo} alt="Rick Loader" />
      </LoaderSpinner>
    </LoaderWrapper>
  );
};

export default Loader;
