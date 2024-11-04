import { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

import { useStore } from '../../../hooks/useStore';
import { observer } from 'mobx-react-lite';
import workIcon from '../../../assets/work.png';
import stockIcon from '../../../assets/stock_market.png';
import { MarketModal } from '../../../component/modal/Market';

const StyledFarmGrid = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  & img {
    cursor: pointer;
  }
`;

const Farms = observer(() => {
  const [marketOpen, setMarketOpen] = useState(false);
  const [itemsModalOpen, setItemsModalOpen] = useState(false);

  const WIDTH = 420;
  const HEIGHT = 420;

  const { userStore, uiStore } = useStore();

  return (
    <>
      <StyledFarmGrid>
        <img src={workIcon} width={WIDTH} height={HEIGHT} alt="work" />
        <img
          src={stockIcon}
          width={WIDTH}
          height={HEIGHT}
          alt="stock"
          onClick={() => setMarketOpen(true)}
        />
      </StyledFarmGrid>
      <MarketModal open={marketOpen} onClose={() => setMarketOpen(false)} />
    </>
  );
});

export default Farms;
