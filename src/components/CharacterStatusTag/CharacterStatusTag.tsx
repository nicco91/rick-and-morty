import classNames from 'classnames';
import { CharacterStatus } from 'models/character';
import React, { useMemo, VFC } from 'react';
import { useTheme } from 'styled-components';
import { ReactComponent as AliveIcon } from 'icons/alive.svg';
import { ReactComponent as DeadIcon } from 'icons/dead.svg';
import { ReactComponent as ZombieIcon } from 'icons/zombie.svg';

type Props = {
  className?: string;
  status: CharacterStatus;
};

const CharacterStatusTag: VFC<Props> = ({ status, className }) => {
  const { colors } = useTheme();
  const [Icon, fill] = useMemo(() => {
    switch (status) {
      case 'Alive':
        return [AliveIcon, colors.success];
      case 'Dead':
        return [DeadIcon, colors.error];
      default:
        return [ZombieIcon, colors.textSecondary];
    }
  }, [status, colors]);

  return (
    <div className={classNames('CharacterStatusTag', className)}>
      <Icon style={{ fill }} />
    </div>
  );
};

export default CharacterStatusTag;
