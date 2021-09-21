import useBreakpoint from 'hooks/useBreakpoint';
import React, { VFC } from 'react';
// @ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import {
  CgPushChevronLeft,
  CgPushChevronRight,
  CgChevronLeft,
  CgChevronRight,
} from 'react-icons/cg';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  > *:not(:last-child) {
    margin-right: 24px;
  }
`;

type Props = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onFirst: () => void;
  onLast: () => void;
};

const Pagination: VFC<Props> = ({ page, totalPages, onPrev, onNext, onFirst, onLast }) => {
  const { mobile } = useBreakpoint();

  const buttons = [
    {
      Icon: CgPushChevronLeft,
      label: 'First',
      onClick: onFirst,
    },
    {
      Icon: CgChevronLeft,
      label: 'Prev',
      onClick: onPrev,
    },
    {
      Icon: CgChevronRight,
      label: 'Next',
      onClick: onNext,
    },
    {
      Icon: CgPushChevronRight,
      label: 'Last',
      onClick: onLast,
    },
  ];

  return (
    <PaginationWrapper className="Pagination">
      <div>
        Page {page} of {totalPages}
      </div>
      {buttons.map(({ Icon, label, onClick }) => (
        <AwesomeButton type="secondary" size={mobile ? 'icon' : 'small'} onPress={onClick}>
          <Icon size={24} /> {!mobile && label}
        </AwesomeButton>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
