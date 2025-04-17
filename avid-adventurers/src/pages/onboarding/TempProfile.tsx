import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar} from '../../components/NavBar/NavBar';
import { Container, FormWrapper, Title } from '../styles';
import { useOnboarding } from '../../utils/onboardingContext';

const TempProfile: React.FC = () => {
    return (
        <Container>
            <FormWrapper>
                <Title>Profile</Title>
                <NavBar/>
            </FormWrapper>
        </Container>
)};

export default TempProfile;