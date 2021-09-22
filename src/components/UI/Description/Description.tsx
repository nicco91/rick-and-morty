import classNames from 'classnames';
import React, { VFC } from 'react';
import styled from 'styled-components';
import Text from '../Text';

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 8px;
  }
`;

type Props = {
  label: string;
  content: React.ReactNode;
  className?: string;
};

const Description: VFC<Props> = ({ label, content, className }) => {
  return (
    <DescriptionWrapper className={classNames('Description', className)}>
      <Text bold>{label}:</Text>
      <div>{content}</div>
    </DescriptionWrapper>
  );
};

export default Description;
