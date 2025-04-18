import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavWrapper, OptionWrapper, NavText, Icon } from './styles';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <OptionWrapper onClick={() => navigate("/tempHome")} style={{ cursor: 'pointer' }}>
        <NavText>Home</NavText>
        <Icon src="/Home.png" alt="home page icon" />
      </OptionWrapper>

      <OptionWrapper onClick={() => navigate("/tempBucket")} style={{ cursor: 'pointer' }}>
        <NavText>Bucketlist</NavText>
        <Icon src="/Bucketlist.png" alt="bucket list page icon" />
      </OptionWrapper>

      <OptionWrapper onClick={() => navigate("/tempChat")} style={{ cursor: 'pointer' }}>
        <NavText>Inbox</NavText>
        <Icon src="/Inbox.png" alt="inbox page icon" />
      </OptionWrapper>

      <OptionWrapper onClick={() => navigate("/tempProfile")} style={{ cursor: 'pointer' }}>
        <NavText>Profile</NavText>
        <Icon src="/Profile.png" alt="profile page icon" />
      </OptionWrapper>
    </NavWrapper>
  );
};
