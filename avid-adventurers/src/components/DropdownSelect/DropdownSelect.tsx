import React, { useState } from 'react';
import {
  Wrapper,
  DropdownHeader,
  DropdownList,
  DropdownListItem,
} from './styles';

import { ReactComponent as ChevronDown } from '../../assets/chevron-down.svg';
import { ReactComponent as ChevronUp } from '../../assets/chevron-up.svg';

interface DropdownProps {
  label: string;
  options: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const DropdownSelect: React.FC<DropdownProps> = ({
  label,
  options,
  selected,
  setSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  const filteredOptions = options.filter((opt) => opt !== selected);

  return (
    <Wrapper>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {selected || label}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </DropdownHeader>


      {isOpen && filteredOptions.length > 0 && (
        <DropdownList>
          {filteredOptions.map((option) => (
            <DropdownListItem
              key={option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </Wrapper>
  );
};
