import { useState } from 'react';
import { ItemsModal } from '../../../component/modal/Items';
import { MarketModal } from '../../../component/modal/Market';
import {
  HeaderTitleWrapper,
  OutletWrapper,
  StyledButtonWrapper,
  StyledHeader,
} from './style';
import { Outlet } from 'react-router-dom';
import gameLogo from '../../../assets/life_game.jpg';
import { MenuPopover } from '../../../component/popover/Menu';
import { Button } from '@mui/material';
import coin from '../../../assets/coin.png';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../hooks/useStore';
import SleepModal from '../../../component/modal/Sleep';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const Header = observer(() => {
  const [itemsModalOpen, setItemsModalOpen] = useState(false);
  const [sleepModalOpen, setSleepModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { uiStore, farmStore, userStore } = useStore();

  const handleClickSleep = async () => {
    setSleepModalOpen(true);
    await farmStore.sleep({ id: userStore.id });
  };

  return (
    <>
      <StyledHeader>
        <div style={{ display: 'flex' }}>
          <img src={gameLogo} style={{ width: '120px', marginLeft: '12px' }} />
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
              onClick={handleClickSleep}
              variant="contained"
              style={{ fontFamily: 'Neo둥근모' }}
            >
              잠들기 <BedtimeIcon style={{ width: '20px', height: '20px' }} />
            </Button>
            <Button
              variant="contained"
              onClick={() => setItemsModalOpen(true)}
              style={{ fontFamily: 'Neo둥근모' }}
            >
              아이템
              <ShoppingBagIcon style={{ width: '20px', height: '20px' }} />
            </Button>
            <Button
              variant="contained"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              style={{ fontFamily: 'Neo둥근모' }}
            >
              메뉴 <MenuIcon style={{ width: '20px', height: '20px' }} />
            </Button>
          </StyledButtonWrapper>
        </div>
      </StyledHeader>
      <MenuPopover anchorEl={anchorEl} handleClose={() => setAnchorEl(null)} />
      <ItemsModal
        open={itemsModalOpen}
        onClose={() => {
          setItemsModalOpen(false);
          uiStore.setSelectedFarmId('');
        }}
      />
      <SleepModal
        open={sleepModalOpen}
        onClose={() => setSleepModalOpen(false)}
      />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
});
