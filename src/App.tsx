import React, { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCharacters } from 'store/characterSlice';

function App() {
  const dispatch = useAppDispatch();
  const { loading, items: characters } = useAppSelector((state) => state.characters, shallowEqual);
  const { episodes, locations } = useAppSelector((state) => state.registry, shallowEqual);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className="App">
      {loading
        ? 'Loading...'
        : characters.map((character) => (
            <div key={character.id}>
              <h3>{character.name}</h3>
              <p>{character.gender}</p>
              <p>
                {character.status} - {character.type || character.species}
              </p>
              <p>Origin: {`${locations[character.originId]}`}</p>
              <p>Location: {`${locations[character.locationId]}`}</p>
              {character.episodeIds.map((e) => (
                <p key={e}>{`${episodes[e]}`}</p>
              ))}
            </div>
          ))}
    </div>
  );
}

export default App;
