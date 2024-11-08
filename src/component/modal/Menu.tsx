import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useAuthStore from '../../stores/useAuthStore';

interface MenuModalProps {
  open: boolean;
  handleClose: () => void;
}
export const MenuModal = ({ open, handleClose }: MenuModalProps) => {
  const { setAuthenticated } = useAuthStore();
  const handleLogin = () => {
    setAuthenticated(false);
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose} disableScrollLock>
      <DialogTitle>로그인</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="아이디"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="password"
          label="비밀번호"
          type="password"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>닫기</Button>
        <Button onClick={handleLogin}>로그인</Button>
      </DialogActions>
    </Dialog>
  );
};
