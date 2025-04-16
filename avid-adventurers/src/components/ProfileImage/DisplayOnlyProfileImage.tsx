import React from 'react';
import {
  ProfileImageWrapper,
  ProfileImagePreview,
  FallbackText,
  PlaceholderText
} from '../../pages/styles';

interface DisplayOnlyProfileImageProps {
  profileImage: File | null;
}

export const DisplayOnlyProfileImage: React.FC<DisplayOnlyProfileImageProps> = ({
  profileImage,
}) => {
  const [imageError, setImageError] = React.useState(false);

  // Use a style override to remove the pointer cursor inherited from ProfileImageWrapper
  const wrapperStyle = { cursor: 'default' };

  return (
    <ProfileImageWrapper style={wrapperStyle}>
      {profileImage ? (
        <>
          <ProfileImagePreview
            src={URL.createObjectURL(profileImage)}
            onError={() => setImageError(true)}
          />
          {imageError && <FallbackText>Image failed to load</FallbackText>}
        </>
      ) : (
        // Display different placeholder text as it's not clickable
        <PlaceholderText>No Image</PlaceholderText>
      )}
    </ProfileImageWrapper>
  );
}; 