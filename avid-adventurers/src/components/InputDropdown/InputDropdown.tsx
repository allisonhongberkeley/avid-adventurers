import React, { useState } from 'react';
import {
  Wrapper,
  DropdownHeader,
} from './styles';
import { Tag, TagContainer, RemoveButton } from '../styles';

import { ReactComponent as ChevronDown } from '../../assets/chevron-down.svg';
import { ReactComponent as ChevronUp } from '../../assets/chevron-up.svg';

interface DropdownProps {
  label: string;
  options: string[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

export const InputDropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selected,
  setSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTagClick = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleRemove = (option: string) => {
    setSelected((prev) => prev.filter((item) => item !== option));
  };

  return (
    <Wrapper>
      <DropdownHeader $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {label}
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </DropdownHeader>

      {(isOpen || selected.length > 0) && (
        <TagContainer>
          {(isOpen ? options : selected).map((option) =>
            isOpen ? (
              <Tag
                key={option}
                onClick={() => handleTagClick(option)}
                $selected={selected.includes(option)}
                $isClosed={false}
              >
                {option}
              </Tag>
            ) : (
              <Tag
                key={option}
                $selected={false}
                $isClosed={true}
              >
                {option}
                <RemoveButton onClick={() => handleRemove(option)}>×</RemoveButton>
              </Tag>
            )
          )}
        </TagContainer>
      )}
    </Wrapper>
  );
};
