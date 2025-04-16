import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 75%;
  max-width: 400px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.65);
  overflow: hidden;
  background-color: #fff;
  padding: 16px;
`;

export const EventImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
  padding-top: 20px;
`;

export const EventTitle = styled.h2`
  font-size: 2rem;
  margin-top: 12px;
  margin-bottom: 4px;
  font-weight: 600;
`;

export const EventDetail = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 2px 0;
`;

export const Interested = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  font-weight: 500;
  color: #3D405B;
`;
