import moment from 'moment';
import React, { VFC } from 'react';
import { Episode } from 'rickmortyapi/dist/interfaces';
import styled from 'styled-components';
import { ReactComponent as TVIcon } from 'icons/tv.svg';

type Props = {
  episode: Episode;
};

const EpisodeItemWrapper = styled.div`
  display: flex;
  padding: 24px 0;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

const EpisodeData = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  flex: 0 0 20%;
`;

const EpisodeIcon = styled.div`
  flex: 0 0 auto;
  margin-right: 16px;
`;

const EpisodeAirDate = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 14px;
  margin-top: 2px;
`;
const EpisodeTitle = styled.div`
  flex: 1 1 auto;
`;

const EpisodeItem: VFC<Props> = ({ episode }) => {
  return (
    <EpisodeItemWrapper className="EpisodeItem">
      <EpisodeIcon>
        <TVIcon width={24} />
      </EpisodeIcon>
      <EpisodeData>
        <div>{episode.episode}</div>
        <EpisodeAirDate>{moment(episode.air_date).format('MMM D, YYYY')}</EpisodeAirDate>
      </EpisodeData>
      <EpisodeTitle>{episode.name}</EpisodeTitle>
    </EpisodeItemWrapper>
  );
};

export default EpisodeItem;
