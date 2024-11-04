import { useState } from 'react';

function StaminaBar() {
  const [stamina, setStamina] = useState(100);

  const decreaseStamina = (amount: number) => {
    setStamina((prev) => Math.max(prev - amount, 0));
  };

  return (
    <div>
      <div style={staminaBarStyle(stamina)} />
      <button onClick={() => decreaseStamina(10)}>스태미너 감소</button>
    </div>
  );
}

const staminaBarStyle = (stamina: number) => ({
  width: `${stamina}%`,
  height: '20px',
  backgroundColor: stamina > 60 ? 'green' : stamina > 30 ? 'yellow' : 'red',
  transition: 'width 0.3s ease-in-out, background-color 0.3s ease-in-out',
});

export default StaminaBar;
