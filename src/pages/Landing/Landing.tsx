import { useState } from 'react';
import gameLogo from '../../assets/life_game.jpg';
import * as S from './style';
import { SignupModal } from '../../component/modal/Signup';
import { LoginModal } from '../../component/modal/Login';
import login from '../../assets/login.png';
import register from '../../assets/register.png';

export const Landing = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  return (
    <S.LandingWrapper>
      <div
        style={{
          height: '100%',
          width: '450px',
          background: '#00000070',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ marginTop: '150px' }}>
          <img
            src={gameLogo}
            className="logo"
            alt="logo"
            style={{
              width: '350px',
              objectFit: 'contain',
            }}
          />
        </div>
        <S.ButtonWrapper>
          <img
            src={login}
            width={240}
            height={100}
            style={{ cursor: 'pointer' }}
            onClick={() => setLoginModalOpen(true)}
          />
          <img
            src={register}
            width={240}
            height={100}
            style={{ cursor: 'pointer' }}
            onClick={() => setSignupModalOpen(true)}
          />

          <LoginModal
            open={loginModalOpen}
            handleClose={() => setLoginModalOpen(false)}
          />
          <SignupModal
            open={signupModalOpen}
            handleClose={() => setSignupModalOpen(false)}
          />
        </S.ButtonWrapper>
      </div>
    </S.LandingWrapper>
  );
};
