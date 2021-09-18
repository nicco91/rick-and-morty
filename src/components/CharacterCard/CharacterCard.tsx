import classNames from 'classnames';
import CharacterGenderTag from 'components/CharacterGenderTag';
import CharacterStatusTag from 'components/CharacterStatusTag';
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
      {character.episode.length} episode{character.episode.length > 1 ? 's' : ''}
    </Card>
  );
};

export default CharacterCard;
