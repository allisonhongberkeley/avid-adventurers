import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Or adjust as needed */
  background-color: #fff; /* Assuming white background */
  max-width: 400px; /* Simulating phone width */
  margin: 0 auto; /* Center page */
  border: 1px solid #eee; /* Optional: border for visualization */
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-right: 15px;
  color: #333;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto; /* Center title */
  transform: translateX(-15px); /* Adjust centering due to back button */
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 15px 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

export const SearchIconImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  opacity: 0.5;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 14px;
  background: transparent;
  &::placeholder {
    color: #aaa;
  }
`;

export const ChatList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

export const ChatItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #eee; /* Placeholder background */
  border: 1px solid #ccc; /* Sketchy border for all */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  margin-right: 15px;
  color: #555;
  /* Removed specific style for Jason's blue border */
  /*
  ${ChatItemContainer}:nth-child(3) & {
      border: 2px solid #007bff;
      color: #007bff;
  }
  */
`;

export const ChatInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 4px;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 15px;
  color: #333;
`;

export const Timestamp = styled.span`
  font-size: 12px;
  color: #888;
  white-space: nowrap;
  margin-bottom: 4px; /* Space between timestamp and badge/icon */
`;

export const MessagePreview = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px; /* Adjust as needed */
`;

export const RightElements = styled.div`
  display: flex;
  flex-direction: column;   /* Stack items vertically */
  align-items: flex-end;    /* Align items to the right */
  margin-left: auto;      /* Push container to the right */
  flex-shrink: 0;         /* Prevent shrinking */
  /* Adjust padding-top to roughly align Timestamp with UserName baseline */
  padding-top: 2px; 
`;

export const UnreadBadge = styled.span`
  background-color: #007bff; 
  color: white;
  font-size: 11px;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 10px;
  min-width: 18px; /* Ensure consistent width */
  height: 18px; /* Ensure consistent height */
  display: inline-flex; /* Use flex to center content */
  align-items: center;
  justify-content: center;
  line-height: 1; /* Adjust line-height for centering */
`;

export const NavIcon = styled.span`
  font-size: 16px;
  color: #aaa;
  /* Ensure NavIcon takes up roughly the same vertical space as UnreadBadge */
  display: inline-block;
  line-height: 1; /* Match badge line-height */
  padding: 3px 0; /* Adjust padding to visually match badge height */
  min-width: 18px; /* Match badge width for alignment */
  text-align: center; /* Center the '>' */
`; 