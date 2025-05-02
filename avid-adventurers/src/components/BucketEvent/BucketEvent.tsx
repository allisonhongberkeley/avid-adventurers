import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBucketlist } from '../../utils/bucketlistContext';
import { PageWrapper, ImageWrapper, HeaderImage, Title, InfoText, FadingWrapper, HeartIcon} from './styles';

type BucketEventProps = {
  title: string;
  time: string;
  weekday: string;
  date: string;
  imageUrl: string;
  location: string;
  link: string;
};

export const BucketEvent: React.FC<BucketEventProps> = ({
  title,
  time,
  weekday,
  date,
  imageUrl,
  location,
  link
}) => {
  const navigate = useNavigate();
  const { removeFromBucketlist } = useBucketlist();
  const [isFading, setIsFading] = useState(false);
  const [isHeartEmpty, setIsHeartEmpty] = useState(false);

  const handleClick = () => {
    if (!isFading) navigate(link);
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setIsHeartEmpty(true); 
    setTimeout(() => {
      setIsFading(true); 
    }, 250);
    setTimeout(() => {
      const slug = link.split('/').pop();
      if (slug) removeFromBucketlist(slug);
    }, 450);
  };
  

  return (
    <FadingWrapper fade={isFading}>
      <PageWrapper onClick={handleClick} style={{ cursor: 'pointer', position: 'relative' }}>
        <HeartIcon
          src={isHeartEmpty ? '/emptyheart.png' : '/fullheart.png'}
          onClick={handleHeartClick}
          alt="heart icon"
        />
        <ImageWrapper>
          <HeaderImage src={imageUrl} alt={title} />
        </ImageWrapper>
        <Title>{title}</Title>
        <InfoText>
          <strong>Location:</strong> {location}
        </InfoText>
        <InfoText>
          <strong>When:</strong> {weekday}, {date} at {time}
        </InfoText>
      </PageWrapper>
    </FadingWrapper>
  );
};
