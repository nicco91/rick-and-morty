import AppHeader from 'components/AppHeader';
import CharacterGrid from 'components/CharacterGrid';
import React, { useEffect, VFC } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCharacters } from 'store/characterSlice';
import styled from 'styled-components';

const AppWrapper = styled.div`
  padding: 20px;
  background-color: #f0f2fa;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile + 1 + 'px'}) {
    padding: 25px 50px;
  }
`;

const App: VFC = () => {
  const dispatch = useAppDispatch();
  const { loading, items: characters } = useAppSelector((state) => state.characters, shallowEqual);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <AppWrapper className="App">
      <AppHeader />
      {loading ? 'Loading...' : <CharacterGrid characters={characters} gutter={32} />}
    </AppWrapper>
  );
};

export default App;
