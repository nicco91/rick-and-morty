import classNames from 'classnames';
import AppHeader from 'components/AppHeader';
import CharacterGrid from 'components/CharacterGrid';
import React, { useEffect, VFC } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCharacters } from 'store/characterSlice';
import styled from 'styled-components';

const App: VFC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { loading, items: characters } = useAppSelector((state) => state.characters, shallowEqual);
  // const { episodes, locations } = useAppSelector((state) => state.registry, shallowEqual);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className={classNames('App', className)}>
      <AppHeader />
      {loading ? 'Loading...' : <CharacterGrid characters={characters} gutter={32} />}
    </div>
  );
};

export default styled(App)`
  padding: 25px 50px;
  background-color: #f0f2fa;
`;
