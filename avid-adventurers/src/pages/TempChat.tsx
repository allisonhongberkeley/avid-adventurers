import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar} from '../components/NavBar/NavBar';
import { Container, Title, } from './styles';
import { useOnboarding } from '../utils/onboardingContext';

const TempChat: React.FC = () => {
    return (
        <Container>
            <Title>Chat</Title>
            <NavBar/>
        </Container>
)};

export default TempChat;