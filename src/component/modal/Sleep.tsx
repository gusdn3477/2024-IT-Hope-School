import { Dialog, DialogTitle } from '@mui/material';
import { useEffect } from 'react';
import styled from 'styled-components';
import goodnight from '../../assets/sleep.png';

export interface SleepModalProps {
  open: boolean;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)`
  & .MuiDialog-paper {
    width: 600px;
    max-width: none;
    overflow-y: hidden;
  }
`;

const SleepModal = (props: SleepModalProps) => {
  const { open, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  }, [open]);

  return (
    <StyledDialog onClose={handleClose} open={open} disableScrollLock>
      <DialogTitle
        style={{
          textAlign: 'center',
          fontSize: '32px',
        }}
      >
        Good Night
      </DialogTitle>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={goodnight} style={{ width: '600px' }} />
      </div>
    </StyledDialog>
  );
};

export default SleepModal;
