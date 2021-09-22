import classNames from 'classnames';
import React, { useState, VFC } from 'react';
import styled from 'styled-components';
import EpisodeList from 'components/EpisodeList/EpisodeList';
import Modal from 'components/UI/Modal';
import { Character } from 'models/character';
import Avatar from 'components/UI/Avatar';

type Props = {
  className?: string;
  character: Character;
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

const EpisodeModalTitle = styled.div`
  display: flex;
  align-items: center;
  > h2 {
    margin: 0;
    margin-left: 16px;
  }
`;

const CharacterEpisodeTag: VFC<Props> = ({ className, character }) => {
  const [visible, setVisible] = useState(false);
  const { episodeIds, name: characterName } = character;

  return (
    <>
      <EpisodeTag
        className={classNames('CharacterEpisodeTag', className)}
        onClick={() => setVisible(true)}
      >
        {episodeIds.length} episode{episodeIds.length > 1 ? 's' : ''}
      </EpisodeTag>
      <Modal
        title={
          <EpisodeModalTitle>
            <Avatar image={character.image} />
            <h2>{characterName || 'Character'} episodes</h2>
          </EpisodeModalTitle>
        }
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <EpisodeList {...{ episodeIds, characterName }} />
      </Modal>
    </>
  );
};

export default CharacterEpisodeTag;
