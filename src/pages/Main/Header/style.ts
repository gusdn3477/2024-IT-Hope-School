import styled from '@emotion/styled';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  background-color: blue;
`;

export const OutletWrapper = styled.div`
  width: 100%;
  height: calc(100% - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButtonWrapper = styled('div')`
  & button {
    margin: 6px;
  }
`;

export const HeaderTitleWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 26px;

  & strong {
    margin-right: 8px;
  }
`;
