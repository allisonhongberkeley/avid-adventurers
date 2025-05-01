import React from 'react';
import { Tag, TagContainer } from '../../components/TagSelector/styles';

interface TagSelectorProps {
  selectedTags: string[];
  allTags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

const TagSelector: React.FC<TagSelectorProps> = ({
  selectedTags,
  allTags,
  onAddTag,
  onRemoveTag,
}) => {
  const unselectedTags = allTags.filter((tag) => !selectedTags.includes(tag));

  return (
    <>
      <TagContainer>
        {selectedTags.map((tag) => (
          <Tag key={tag} $selected onClick={() => onRemoveTag(tag)}>
            {tag} ✕
          </Tag>
        ))}
      </TagContainer>

      <TagContainer>
        {unselectedTags.map((tag) => (
          <Tag key={tag} $selected={false} onClick={() => onAddTag(tag)}>
            + {tag}
          </Tag>
        ))}
      </TagContainer>
    </>
  );
};

export default TagSelector;
