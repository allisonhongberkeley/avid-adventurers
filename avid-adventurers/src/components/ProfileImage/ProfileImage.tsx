import React, {useState} from 'react';
import { 
  ProfileImageWrapper, 
  ProfileImageInput, 
  PlaceholderText, 
  ProfileImagePreview, 
  FallbackText 
} from '../../pages/styles';

interface ProfileImageProps {
  profileImage: File | null;
  setProfileImage?: (file: File) => void;
<<<<<<< HEAD
=======
  readOnly?: boolean;
>>>>>>> 737bf9e (refactor: Integrate readOnly mode into ProfileImage and separate ProfileDisplay styles)
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  profileImage,
  setProfileImage,
  readOnly = false
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
    if (!setProfileImage) return;
    if (e.target.files && e.target.files[0]) {
=======
    if (!readOnly && setProfileImage && e.target.files && e.target.files[0]) {
>>>>>>> 737bf9e (refactor: Integrate readOnly mode into ProfileImage and separate ProfileDisplay styles)
      setProfileImage(e.target.files[0]);
      setImageError(false);
    }
  };

  const wrapperStyle = readOnly ? { cursor: 'default' } : {};

  return (
    <ProfileImageWrapper style={wrapperStyle}>
      {!readOnly && (
        <ProfileImageInput type="file" accept="image/*" onChange={handleImageChange} />
      )}
      {profileImage ? (
        <>
          <ProfileImagePreview 
            src={URL.createObjectURL(profileImage)} 
            onError={() => setImageError(true)}
          />
          {imageError && <FallbackText>Image failed to load</FallbackText>}
        </>
      ) : (
        <PlaceholderText>{readOnly ? 'No Image' : 'Upload Image'}</PlaceholderText>
      )}
    </ProfileImageWrapper>
  );
};