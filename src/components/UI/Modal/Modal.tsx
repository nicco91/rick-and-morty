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
`;

const ModalTitle = styled.div`
  margin: 20px 32px;
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
    <SkyLightStateless
      className="Modal"
      isVisible={visible}
      title={<ModalTitle>{title}</ModalTitle>}
      onCloseClicked={onClose}
      onOverlayClicked={onClose}
      dialogStyles={{
        padding: '16px 0',
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
    </SkyLightStateless>
  );
};

export default Modal;
