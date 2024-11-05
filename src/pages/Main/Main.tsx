import { useState } from 'react';
import styled from 'styled-components';
import workIcon from '../../assets/work.png';
import wealthIcon from '../../assets/wealth.png';
import stockIcon from '../../assets/stock_market.png';
import background from '../../assets/city.jpg';
import houseIcon from '../../assets/house.png';
import { MarketModal } from '../../component/modal/Market';
import { useStore } from '../../hooks/useStore';
import SleepModal from '../../component/modal/Sleep';
import { WorkModal } from '../../component/modal/Work';
import { Header } from './Header';

// IconSection Props 타입 정의
interface IconSectionProps {
  icon: string;
  onClick?: () => void;
  label: string;
}

const IconSection = ({ icon, onClick, label }: IconSectionProps) => (
  <IconContainer onClick={onClick}>
    <img src={icon} alt={label} />
    <StyledSubText>{label}</StyledSubText>
  </IconContainer>
);

const Main = () => {
  const [sleepModalOpen, setSleepModalOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const [workModalOpen, setWorkModalOpen] = useState(false);
  const [isPurchase, setIsPurchase] = useState(true);

  const { farmStore, userStore } = useStore();

  const openSleepModal = async () => {
    setSleepModalOpen(true);
    await farmStore.sleep({ id: userStore.id });
  };

  const openWorkModal = () => {
    setWorkModalOpen(true);
  };

  const openTreasureModal = () => {
    setMarketOpen(true);
    setIsPurchase(false);
  };

  const openStockMarketModal = () => {
    setMarketOpen(true);
    setIsPurchase(true);
  };

  return (
    <Layout>
      <Header />
      <MainContainer>
        <IconGrid>
          <IconSection
            icon={houseIcon}
            onClick={openSleepModal}
            label="잠자기"
          />
          <IconSection
            icon={wealthIcon}
            onClick={openTreasureModal}
            label="내 자산"
          />
          <IconSection icon={workIcon} onClick={openWorkModal} label="일하기" />
          <IconSection
            icon={stockIcon}
            onClick={openStockMarketModal}
            label="투자하기"
          />
        </IconGrid>

        <SleepModal
          open={sleepModalOpen}
          onClose={() => setSleepModalOpen(false)}
        />
        <WorkModal
          open={workModalOpen}
          onClose={() => setWorkModalOpen(false)}
        />
        <MarketModal
          open={marketOpen}
          onClose={() => setMarketOpen(false)}
          isPurchase={isPurchase}
        />
      </MainContainer>
    </Layout>
  );
};

export default Main;

// 스타일 정의와 공통 컴포넌트 분리
const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const IconGrid = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  & img {
    width: 100%;
    height: 420px;
  }
`;

const StyledSubText = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
