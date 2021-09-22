import { useBodyLock } from 'hooks/useBodyLock';
import React, { FC, useEffect } from 'react';
import { SkyLightStateless } from 'react-skylight';
import styled, { useTheme } from 'styled-components';

type Props = {
  visible?: boolean;
  title?: React.ReactNode;
  onClose?: () => void;
};

const ModalContent = styled.div`
  max-height: calc(80vh - 100px);
  overflow-y: auto;
  box-sizing: border-box;
  padding: 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile + 'px'}) {
    max-height: calc(100vh - 140px) !important;
  }
`;

const ModalTitle = styled.div`
  padding: 20px 48px 20px 32px;
`;

const ModalWrapper = styled(SkyLightStateless)`
  > .skylight-dialog {
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletLandscape + 'px'}) {
      width: 80% !important;
      left: 35% !important;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile + 'px'}) {
      width: 90% !important;
      max-height: calc(100vh - 40px) !important;
      top: 20px !important;
      left: 30% !important;
    }
  }
`;

const Modal: FC<Props> = ({ visible, title, children, onClose }) => {
  const theme = useTheme();
  const [lockBody, unlockBody] = useBodyLock();

  useEffect(() => {
    if (visible) {
      lockBody();
    } else {
      unlockBody();
    }
  }, [lockBody, unlockBody, visible]);

  return (
    <ModalWrapper
      className="Modal"
      isVisible={visible}
      title={<ModalTitle>{title}</ModalTitle>}
      onCloseClicked={onClose}
      onOverlayClicked={onClose}
      dialogStyles={{
        padding: '0 0 20px 0',
        borderRadius: theme.borderRadius,
        maxHeight: 'calc(100vh - 100px)',
        boxSizing: 'border-box',
        top: '50px',
        marginTop: 0,
        minHeight: 'auto',
        boxShadow: theme.boxShadow,
      }}
      closeButtonStyle={{
        top: '8px',
        right: '16px',
      }}
    >
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
