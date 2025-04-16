import React, { useState } from 'react';
import { Wrapper, SearchInputWrapper, StyledInput, IconButton, SearchIcon, SearchButton, ClearIcon } from './styles';
import { Tag, TagContainer, RemoveButton } from '../styles';

interface SearchInputProps {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchInput: React.FC<SearchInputProps> = ({ selected, setSelected }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTag = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !selected.includes(trimmed)) {
      setSelected([...selected, trimmed]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleRemoveTag = (tag: string) => {
    setSelected(selected.filter(item => item !== tag));
  };

  return (
    <Wrapper>
      <SearchInputWrapper>
        <SearchButton onClick={handleAddTag}>
          <SearchIcon />
        </SearchButton>
        <StyledInput
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <IconButton onClick={() => setInputValue('')}>
            <ClearIcon />
        </IconButton>
      </SearchInputWrapper>

      <TagContainer>
        {selected.map(tag => (
          <Tag key={tag} $selected={true} $isClosed={true}>
            {tag}
            <RemoveButton onClick={() => handleRemoveTag(tag)}>×</RemoveButton>
          </Tag>
        ))}
      </TagContainer>
    </Wrapper>
  );
};
