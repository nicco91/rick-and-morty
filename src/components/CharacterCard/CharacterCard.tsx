import classNames from 'classnames';
import CharacterEpisodeTag from 'components/CharacterEpisodeTag';
import CharacterGenderTag from 'components/CharacterGenderTag';
import CharacterStatusTag from 'components/CharacterStatusTag';
import LocationTag from 'components/LocationTag';
import Card from 'components/UI/Card';
import { Character } from 'models/character';
import React, { VFC } from 'react';
import styled from 'styled-components';

type Props = {
  character: Character;
  className?: string;
};

const CharacterInfo = styled.div`
  display: flex;
  align-items: center;

  > *:not(:last-child) {
    margin-right: 8px;
  }
`;

const CharacterData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const CharacterCard: VFC<Props> = ({ character, className }) => {
  return (
    <Card
      className={classNames('CharacterCard', className)}
      image={character.image}
      title={character.name}
      subTitle={character.type || character.species}
      extra={
        <CharacterInfo>
          <CharacterStatusTag status={character.status} />
          <CharacterGenderTag gender={character.gender} />
        </CharacterInfo>
      }
    >
      <CharacterData>
        <LocationTag label="Origin" locationId={character.originId} />
        <LocationTag locationId={character.locationId} />
        <CharacterEpisodeTag episodeIds={character.episodeIds} />
      </CharacterData>
    </Card>
  );
};

export default CharacterCard;
