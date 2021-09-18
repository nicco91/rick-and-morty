import classNames from 'classnames';
import React, { VFC } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  episodeIds: number[];
};

const EpisodeTag = styled.div`
  padding: 4px 16px;
  color: white;
  background-color: ${(props) => props.theme.colors.textPrimary};
  cursor: pointer;
  width: auto;
  display: inline-block;
  border-radius: 99px;
`;

const CharacterEpisodeTag: VFC<Props> = ({ className, episodeIds }) => {
  return (
    <EpisodeTag className={classNames('CharacterEpisodeTag', className)}>
      {episodeIds.length} episode{episodeIds.length > 1 ? 's' : ''}
    </EpisodeTag>
  );
};

export default CharacterEpisodeTag;
