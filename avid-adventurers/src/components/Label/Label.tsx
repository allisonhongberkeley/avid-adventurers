import React from 'react';
import { StyledLabel, Wrapper } from './styles';
import { ProfileImage} from '../../components/ProfileImage/ProfileImage';

interface LabelProps {
  label: string;
  multiline?: boolean; 
  image?: File | null;
}

export const Label: React.FC<LabelProps> = ({
  label,
  multiline = false, 
  image = null,
}) => {
    return (
        <Wrapper>
            <StyledLabel>{label}</StyledLabel>
            {image && <ProfileImage profileImage={image} />}
        </Wrapper>
        );
    };