import classNames from 'classnames';
import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  image?: string;
  title: string;
  subTitle: React.ReactNode;
  extra?: React.ReactNode;
};

const CardWrapper = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: 100%;
`;

const CardImage = styled.div<{ image: string }>`
  background-image: ${({ image }) => `url('${image}')`};
  background-position: center center;
  background-size: cover;
  min-height: 300px;
`;

const CardBody = styled.div`
  padding: 16px;
  box-sizing: border-box;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const CardTitle = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 24px;
`;

const CardSubtitle = styled.p`
  margin-top: 0;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 18px;
`;

const Card: FC<Props> = ({ className, image, title, subTitle, extra, children }) => {
  return (
    <CardWrapper className={classNames('Card', className)}>
      {image && <CardImage image={image} />}
      <CardBody>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <div>{extra}</div>
        </CardHeader>
        <CardSubtitle>{subTitle}</CardSubtitle>
        <div>{children}</div>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
