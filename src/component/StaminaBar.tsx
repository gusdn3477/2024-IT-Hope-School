import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

interface StaminaBarProps {
  stamina: number;
}
const StaminaBar = observer(({ stamina }: StaminaBarProps) => {
  return (
    <StanimaWrapper>
      <div style={staminaBarStyle(stamina)} />
    </StanimaWrapper>
  );
});

const staminaBarStyle = (stamina: number) => ({
  width: `${stamina}%`,
  height: '20px',
  backgroundColor: stamina > 60 ? 'green' : stamina > 30 ? 'yellow' : 'red',
  transition: 'width 0.3s ease-in-out, background-color 0.3s ease-in-out',
});

const StanimaWrapper = styled.div`
  width: 250px;
`;

export default StaminaBar;
