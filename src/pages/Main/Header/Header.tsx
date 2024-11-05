import { useState } from 'react';
import { HeaderTitleWrapper, StyledButtonWrapper, StyledHeader } from './style';
import gameLogo from '../../../assets/life_game.jpg';
import coin from '../../../assets/coin.png';
import { MenuPopover } from '../../../component/popover/Menu';
import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../hooks/useStore';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = observer(() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { userStore } = useStore();

  return (
    <>
      <StyledHeader>
        <div style={{ display: 'flex' }}>
          <img src={gameLogo} style={{ width: '120px', marginLeft: '6px' }} />
        </div>
        <div style={{ display: 'flex' }}>
          <HeaderTitleWrapper>
            <strong>게임 시작한 지 {userStore.user.day}일 </strong>
            <strong style={{ display: 'flex', alignItems: 'center' }}>
              <img src={coin} width={24} height={24} />
              <strong>{userStore.user.money}원</strong>
            </strong>
          </HeaderTitleWrapper>
          <StyledButtonWrapper>
            <Button
              variant="contained"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              메뉴 <MenuIcon style={{ width: '20px', height: '20px' }} />
            </Button>
          </StyledButtonWrapper>
        </div>
      </StyledHeader>
      <MenuPopover anchorEl={anchorEl} handleClose={() => setAnchorEl(null)} />
    </>
  );
});
