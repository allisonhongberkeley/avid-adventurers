import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px 0;
  background-color: #f4f4f4;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 400px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: flex-start;

  &:hover {
    opacity: 0.8;
  }
`;

export const NavText = styled.span`
  font-size: 14px;
  margin-top: 4px;
  color: #333;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding: 2px;
`;
