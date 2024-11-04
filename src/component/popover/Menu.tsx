import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { ListItem } from '@mui/material';
import useAuthStore from '../../stores/useAuthStore';

interface MenuPopoverProps {
  anchorEl: any;
  handleClose: () => void;
}
export const MenuPopover = ({ anchorEl, handleClose }: MenuPopoverProps) => {
  const open = !!anchorEl;
  const id = open ? 'simple-popover' : undefined;

  const { setAuthenticated } = useAuthStore();
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      disableScrollLock
    >
      <Typography sx={{ cursor: 'pointer' }}>
        <ListItem
          onClick={() => setAuthenticated(false)}
          style={{ fontFamily: 'Neo둥근모' }}
        >
          로그아웃
        </ListItem>
      </Typography>
    </Popover>
  );
};
