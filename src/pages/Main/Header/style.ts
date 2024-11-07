import styled from '@emotion/styled';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  background-color: blue;
`;

export const StyledButtonWrapper = styled('div')`
  & button {
    margin: 6px;
  }
  display: flex;
  align-items: center;
`;

export const HeaderTitleWrapper = styled('div')`
  display: flex;
  align-items: center;
  color: white;
  font-size: 26px;
  gap: 36px;
`;
