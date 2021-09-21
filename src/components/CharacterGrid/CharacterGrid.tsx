import CharacterCard from 'components/CharacterCard';
import Pagination from 'components/UI/Pagination';
import { Character } from 'models/character';
import React, { VFC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCharacters, firstPage, lastPage, nextPage, prevPage } from 'store/characterSlice';
import styled, { css } from 'styled-components';

type Props = {
  characters: Character[];
  className?: string;
  gutter?: number;
};

const CharacterGrid: VFC<Props> = ({ characters, className }) => {
  const { page, totalPages } = useAppSelector((state) => state.characters, shallowEqual);
  const dispatch = useAppDispatch();

  const fetch = () => {
    dispatch(fetchCharacters());
  };

  const handlePrev = () => {
    dispatch(prevPage());
    fetch();
  };
  const handleFirst = () => {
    dispatch(firstPage());
    fetch();
  };
  const handleNext = () => {
    dispatch(nextPage());
    fetch();
  };
  const handleLast = () => {
    dispatch(lastPage());
    fetch();
  };

  return (
    <div className={className}>
      <Row className="CharacterGrid">
        {characters.map((character) => (
          <Col key={character.id} sm={12} md={6} xl={4} className="CharacterGrid__col">
            <CharacterCard character={character} />
          </Col>
        ))}
      </Row>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={handlePrev}
        onFirst={handleFirst}
        onNext={handleNext}
        onLast={handleLast}
      />
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
