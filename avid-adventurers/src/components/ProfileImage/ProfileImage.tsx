import React, {useState} from 'react';
import { 
  ProfileImageWrapper, 
  ProfileImageInput, 
  PlaceholderText, 
  ProfileImagePreview, 
  FallbackText 
} from '../../pages/styles';

interface ProfileImageUploadProps {
  profileImage: File | null;
  setProfileImage: (file: File) => void;
}

export const ProfileImage: React.FC<ProfileImageUploadProps> = ({
  profileImage,
  setProfileImage,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
      setImageError(false);
    }
  };

  return (
    <ProfileImageWrapper>
      <ProfileImageInput type="file" accept="image/*" onChange={handleImageChange} />
      {profileImage ? (
        <>
          <ProfileImagePreview 
            src={URL.createObjectURL(profileImage)} 
            onError={() => setImageError(true)}
          />
          {imageError && <FallbackText>Image failed to load</FallbackText>}
        </>
      ) : (
        <PlaceholderText>Upload Image</PlaceholderText>
      )}
    </ProfileImageWrapper>
  );
};