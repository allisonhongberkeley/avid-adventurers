import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 250px;
  border-radius: 16px;
  border: 2px solid black;
  box-shadow: 0 4px 10px rgba(0,0,0,0.65);
  overflow: hidden;
  background-color: #fff;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
`;

export const EventImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-top: 8px;
  margin-bottom: 5px;
`;

export const EventTitle = styled.h2`
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  margin: 4px 0;
  font-weight: 600;
  line-height: 1.2;
`;

export const EventDetail = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: #555;
  margin: 2px 2px;
  line-height: 1.2;
  word-wrap: break-word;
`;

export const Interested = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  margin-top: 8px;
  font-weight: 500;
  color: #3D405B;
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;
