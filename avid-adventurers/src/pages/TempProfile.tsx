import React from 'react';
import { NavBar} from '../components/NavBar/NavBar';
import { Container, FormWrapper, Title } from './styles';

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