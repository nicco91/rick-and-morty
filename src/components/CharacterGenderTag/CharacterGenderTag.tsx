import classNames from 'classnames';
import { CharacterGender } from 'models/character';
import React, { useMemo, VFC } from 'react';
import { useTheme } from 'styled-components';
import { ReactComponent as MaleIcon } from 'icons/male.svg';
import { ReactComponent as FemaleIcon } from 'icons/female.svg';
import { ReactComponent as GenderlessIcon } from 'icons/genderless.svg';
import { ReactComponent as UnknownIcon } from 'icons/questionCircle.svg';
import ReactTooltip from 'react-tooltip';
import { capitalize } from 'utils/string';

type Props = {
  gender: CharacterGender;
  className?: string;
};

const CharacterGenderTag: VFC<Props> = ({ gender, className }) => {
  const theme = useTheme();
  const [Icon, color] = useMemo(() => {
    switch (gender) {
      case 'Male':
        return [MaleIcon, '#189ef2'];
      case 'Female':
        return [FemaleIcon, '#ff93c2'];
      case 'Genderless':
        return [GenderlessIcon, theme.colors.textSecondary];
      default:
        return [UnknownIcon, theme.colors.textSecondary];
    }
  }, [gender, theme]);

  return (
    <div className={classNames('CharacterGenderTag', className)}>
      <Icon fill={color} data-tip={capitalize(gender)} />
      <ReactTooltip />
    </div>
  );
};

export default CharacterGenderTag;
