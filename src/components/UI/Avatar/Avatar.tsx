import styled from 'styled-components';

type Props = {
  image: string;
};

const Avatar = styled.div<Props>`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

export default Avatar;
