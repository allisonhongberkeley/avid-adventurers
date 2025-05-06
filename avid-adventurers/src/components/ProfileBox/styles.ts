import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 150px;
  height: 175px;
  border-radius: 16px;
  border: 2px solid black;
  box-shadow: 0 4px 10px rgba(0,0,0,0.65);
  overflow: hidden;
  background-color: #fff;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
`;


export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  padding-top: 3px;
  padding-bottom: 6px;
`;


export const ProfileTitle = styled.h2`
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  margin: 4px 0;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
`;
