import { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import workIcon from '../../../assets/work.png';
import wealthIcon from '../../../assets/wealth.png';
import stockIcon from '../../../assets/stock_market.png';
import houseIcon from '../../../assets/house.png';
import { MarketModal } from '../../../component/modal/Market';
import { useStore } from '../../../hooks/useStore';
import SleepModal from '../../../component/modal/Sleep';
import background from '../../../assets/farm_image.jpg';

const StyledFarmGrid = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  & img {
    cursor: pointer;
  }

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Farms = observer(() => {
  const [sleepModalOpen, setSleepModalOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const [isPurchase, setIsPurchase] = useState(true);
  const WIDTH = 420;
  const HEIGHT = 420;

  const { farmStore, userStore } = useStore();

  const handleClickSleep = async () => {
    setSleepModalOpen(true);
    await farmStore.sleep({ id: userStore.id });
  };

  const handleTresureClick = () => {
    setMarketOpen(true);
    setIsPurchase(false);
  };

  const handleStockMarketClick = () => {
    setMarketOpen(true);
    setIsPurchase(true);
  };

  return (
    <>
      <StyledFarmGrid>
        <img
          src={houseIcon}
          width={WIDTH}
          height={HEIGHT}
          alt="sleep"
          onClick={handleClickSleep}
        />
        <img
          src={wealthIcon}
          width={WIDTH}
          height={HEIGHT}
          alt="sleep"
          onClick={handleTresureClick}
        />
        <img src={workIcon} width={WIDTH} height={HEIGHT} alt="work" />
        <img
          src={stockIcon}
          width={WIDTH}
          height={HEIGHT}
          alt="stock"
          onClick={handleStockMarketClick}
        />
      </StyledFarmGrid>

      <SleepModal
        open={sleepModalOpen}
        onClose={() => setSleepModalOpen(false)}
      />
      <MarketModal
        open={marketOpen}
        onClose={() => setMarketOpen(false)}
        isPurchase={isPurchase}
      />
    </>
  );
});

export default Farms;
