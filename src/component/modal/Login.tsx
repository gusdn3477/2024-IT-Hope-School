import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/useStore';
import {
  StyledButton,
  StyledDialogActions,
  StyledDialogTitle,
  StyledTextField,
} from './style';
import { useState } from 'react';
import useAuthStore from '../../stores/useAuthStore';

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}
export const LoginModal = observer(({ open, handleClose }: LoginModalProps) => {
  const { userStore } = useStore();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { setAuthenticated } = useAuthStore();

  const handleLogin = async () => {
    const success = await userStore.login({
      id,
      password,
    });
    if (success) {
      setAuthenticated(true);
      handleClose();
    } else setError(true);
  };

  const handleCloseClick = () => {
    setError(false);
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleCloseClick} disableScrollLock>
      <StyledDialogTitle style={{ fontFamily: 'Neo둥근모' }}>
        로그인
      </StyledDialogTitle>
      <DialogContent>
        <StyledTextField
          autoFocus
          margin="dense"
          id="name"
          label="아이디"
          fullWidth
          onChange={(e) => setId(e.target.value)}
          variant="standard"
        />
        <StyledTextField
          margin="dense"
          id="password"
          label="비밀번호"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          variant="standard"
        />
        {error && <span>아이디와 비밀번호를 확인해 주세요.</span>}
      </DialogContent>
      <StyledDialogActions>
        <StyledButton onClick={handleLogin}>로그인</StyledButton>
        <StyledButton onClick={handleCloseClick}>닫기</StyledButton>
      </StyledDialogActions>
    </Dialog>
  );
});
