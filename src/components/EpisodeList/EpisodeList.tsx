import React, { VFC } from 'react';
import { useAppSelector } from 'store';
import EpisodeItem from './EpisodeItem';

type Props = {
  episodeIds: number[];
};

const EpisodeList: VFC<Props> = ({ episodeIds }) => {
  const { episodes } = useAppSelector((state) => state.registry);

  return (
    <div className="EpisodeList">
      {episodeIds.map((episodeId) => (
        <EpisodeItem key={episodeId} episode={episodes[episodeId]} />
      ))}
    </div>
  );
};

export default EpisodeList;
