import React, { useState, useEffect, useRef }  from 'react';
import { useNavigate } from 'react-router-dom';
import { InputDropdown } from '../../components/InputDropdown/InputDropdown';
import { SearchInput } from '../../components/InterestsSearchInput/InterestsSearchInput'; 
import { Container, Title, Subtitle, FormWrapper, ButtonRow, BackButton, ContinueButton } from '../styles';
import { useOnboarding } from '../../utils/onboardingContext';
import { socialOptions, sportsOptions, foodOptions, artsAndCraftsOptions } from '../../utils/Interests';
import ProgressBar from '../../components/ProgressBar/ProgressBar';


const Interests: React.FC = () => {
    const navigate = useNavigate();
    const [sportsTags, setSportsTags] = useState<string[]>([]);
    const [socialTags, setSocialTags] = useState<string[]>([]);
    const [foodTags, setFoodTags] = useState<string[]>([]);
    const [artsAndCraftsTags, setArtsAndCraftsTags] = useState<string[]>([]);
    const [customTags, setCustomTags] = useState<string[]>([]);
    const { interests, setInterests } = useOnboarding();
    const hasLoaded = useRef(false);

    /* Prepopulate saved tags from onboardingContext on render*/
    useEffect(() => {
        if (!hasLoaded.current) {
          const sports = interests.filter(i => sportsOptions.includes(i));
          const social = interests.filter(i => socialOptions.includes(i));
          const food = interests.filter(i => foodOptions.includes(i));
          const arts = interests.filter(i => artsAndCraftsOptions.includes(i));
      
          const allKnown = new Set([
            ...sportsOptions,
            ...socialOptions,
            ...foodOptions,
            ...artsAndCraftsOptions
          ]);
          const custom = interests.filter(i => !allKnown.has(i));
      
          setSportsTags(sports);
          setSocialTags(social);
          setFoodTags(food);
          setArtsAndCraftsTags(arts);
          setCustomTags(custom);
      
          hasLoaded.current = true;
        }
      }, [interests]);
    
    useEffect(() => {
        if (hasLoaded.current) {
          setInterests([
            ...sportsTags,
            ...socialTags,
            ...foodTags,
            ...artsAndCraftsTags,
            ...customTags,
          ]);
        }
      }, [sportsTags, socialTags, foodTags, artsAndCraftsTags, customTags, setInterests]);

    const handleContinue = () => {
        navigate('/onboarding/profileDisplay');
      };

    const handleBack = () => {
      navigate('/onboarding/age');
    }

    return (
    <Container>
      <FormWrapper>
        <Title>Select the activities that interest you</Title>
        <Subtitle>Key words of search</Subtitle>
        <SearchInput
            selected={customTags}
            setSelected={setCustomTags}
        />

        <Subtitle>Categories</Subtitle>
        <InputDropdown
          label="Sports & Outdoor"
          options={sportsOptions}
          selected={sportsTags}
          setSelected={setSportsTags}
        />

        <InputDropdown
          label="Social"
          options={socialOptions}
          selected={socialTags}
          setSelected={setSocialTags}
        />

        <InputDropdown
          label="Food"
          options={foodOptions}
          selected={foodTags}
          setSelected={setFoodTags}
        />

        <InputDropdown
          label="Arts & Crafts"
          options={artsAndCraftsOptions}
          selected={artsAndCraftsTags}
          setSelected={setArtsAndCraftsTags}
        />
        <ProgressBar totalSteps={3} currentStep={2} />
        <ButtonRow>
          <BackButton onClick={handleBack}>Back</BackButton>
          <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
        </ButtonRow>
      </FormWrapper>
    </Container>
)};

export default Interests;