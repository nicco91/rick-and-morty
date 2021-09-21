import CharacterCard from 'components/CharacterCard';
import { Character } from 'models/character';
import React, { VFC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import styled, { css } from 'styled-components';

type Props = {
  characters: Character[];
  className?: string;
  gutter?: number;
};

const CharacterGrid: VFC<Props> = ({ characters, className }) => {
  return (
    <div className={className}>
      <Row className="CharacterGrid">
        {characters.map((character) => (
          <Col key={character.id} sm={12} md={6} xl={4} className="CharacterGrid__col">
            <CharacterCard character={character} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default styled(CharacterGrid)`
  .CharacterGrid {
    ${({ gutter }) =>
      gutter !== undefined &&
      css({
        marginLeft: -gutter / 2,
        marginRight: -gutter / 2,
      })}

    &__col {
      ${({ gutter }) =>
        gutter !== undefined &&
        css({
          paddingLeft: gutter / 2,
          paddingRight: gutter / 2,
          marginBottom: gutter,
        })}
    }
  }
`;
