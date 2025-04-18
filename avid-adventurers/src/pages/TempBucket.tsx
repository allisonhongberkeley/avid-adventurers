import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar} from '../components/NavBar/NavBar';
import { Container, Title, } from './styles';
import { useOnboarding } from '../utils/onboardingContext';

const TempBucket: React.FC = () => {
    return (
        <Container>
            <Title>Bucketlist</Title>
            <NavBar/>
        </Container>
)};

export default TempBucket;