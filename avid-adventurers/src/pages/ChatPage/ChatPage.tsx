import React, { useState, useEffect, useRef} from 'react';
import { useOnboarding } from '../../utils/onboardingContext';
import { useNavigate } from 'react-router-dom';
import { MessageWithOptions } from '../../components/MessageWithOptions/MessageWithOptions';


import {
    BackButton,
    ChatContainer,
    Header,
    ContactName,
    MessageArea,
    UserMessageBubble,
    InputArea,
    TextInput,
    SendButton,
    MessageRow, 
    ProfileIcon,
    LeftMessageRow, 
    AIIcon,
} from './ChatPageStyles';


type Message = {
    sender: 'my-user' | 'ai' | 'other-user';
    text: string;
};

type AIResponse = {
    key: 'Yes' | 'No';
    text: {
      'Event Name': string;
      'Day of the Week': ' ' | 'Sunday' | 'Monday' | 'Tuesday' |'Wednesday' |'Thursday' |'Friday' | 'Saturday';
      'Start Time': string;
    };
  };

const ChatPage: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [chatLog, setChatLog] = useState<Message[]>([]);
    const socketRef = useRef<WebSocket | null>(null);
    const [userId] = useState(() => crypto.randomUUID());
    const [calendarPrompt, setCalendarPrompt] = useState('');
    const [showCalendarPrompt, setShowCalendarPrompt] = useState(false);
    const [day, setDay] = useState('');
    const [eventName, setEventName] = useState('');
    const [startTime, setStartTime] = useState('');
    const { firstName } = useOnboarding();
    const navigate = useNavigate();
    const apiKey = process.env.REACT_APP_REAGANT_API_KEY;

    /* [TODO] Hardcoded the contactName to be the other user's name. Fix after Inbox is built*/
    const contactName = firstName === 'Claire' ? 'Tyler' : 'Claire';
      
    useEffect(() => {
        socketRef.current = new WebSocket('ws://localhost:3001');

        socketRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const incomingMessage: Message = {
                sender: data.sender === userId ? 'my-user' : 'other-user',
                text: data.text,
              };
            
            setChatLog(prev => [...prev, incomingMessage]);
            };

            socketRef.current.onopen = () => console.log('WebSocket connected');
            socketRef.current.onclose = () => console.log('WebSocket disconnected');

            return () => {
            socketRef.current?.close();
        };
    }, [userId]);

    const convertToTimeFormat = (timeStr: string): string => {
        const time = timeStr.trim().toLowerCase();
        const match = time.match(/^(\d{1,2})(:(\d{2}))?\s*(am|pm)?$/);
      
        if (!match) return '';
      
        let hour = parseInt(match[1], 10);
        let minutes = match[3] ? parseInt(match[3], 10) : 0;
        const period = match[4];
      
        if (period === 'pm' && hour < 12) hour += 12;
        if (period === 'am' && hour === 12) hour = 0;
      
        const pad = (num: number) => num.toString().padStart(2, '0');
        return `${pad(hour)}:${pad(minutes)}`;
      };

    const acceptCalendarInvite = () => {
        setShowCalendarPrompt(false);
        /* Prefill Add Event info and route to /upcoming/add*/
        console.log(eventName, day, contactName, startTime);
        navigate('/calendar/add', {
            state: {
              eventName,
              day,
              contactName,
              startTime,
            },
        });
    };

    const denyCalendarInvite = () => {
        setShowCalendarPrompt(false);
    };

    const handleBack = () => {
        navigate('/inbox');
    };

    const handleSend = async (e?: React.KeyboardEvent<HTMLInputElement>) => {
        if (!inputText.trim() || !socketRef.current) return;

        /* Send text message to WebSocket*/
        const message = {
            sender: userId,
            text: inputText
        };
        socketRef.current.send(JSON.stringify(message));

        /* Clear message input */
        setInputText('');

        /* Parse Reagant output, if AI suggests a Calendar invite*/
        const newMessage: Message = {
            sender: message.sender === userId ? 'my-user' : 'other-user',
            text: inputText,
        };
        const newChatLog = [...chatLog, newMessage];
        const aiMessage = await fetchMessageResponse(newChatLog.slice(-2));
        console.log(aiMessage);
        const capitalizeFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

        if (aiMessage.key === 'Yes') {
        let day = capitalizeFirst(aiMessage.text['Day of the Week']);
        let event_name = capitalizeFirst(aiMessage.text['Event Name']);
        const start_time = aiMessage.text['Start Time'];

        setDay(day);
        setEventName(event_name);
        setStartTime(convertToTimeFormat(start_time));

        setShowCalendarPrompt(true);
        setCalendarPrompt(`Do you want to add ${event_name} on ${day} at ${start_time} to your Calendar?`);
        }
      };

      /* Based on the last two Chat Logs, decide to send calendar invite or not. */

      const fetchMessageResponse = async (conversationHistory: Message[]): Promise<AIResponse> => {
        const conversationString = conversationHistory
          .map((msg) => `${msg.sender}: ${msg.text}`)
          .join('\n');
      
        console.log(conversationString);
        try {
          const response = await fetch('https://noggin.rea.gent/smiling-tarantula-4597', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                "conversationHistory": conversationString,
              }),
          });
      
          const data = await response.json();
          console.log(data);
      
          const confirmation = data.confirmation;
          const answer = data.answer;
      
          if ((confirmation === 'Yes' || confirmation === 'No') && typeof answer === 'object') {
            return {
              key: confirmation,
              text: answer,
            };
          } else {
            throw new Error('Unexpected structure in AI response');
          }
      
        } catch (error) {
          console.error('Error fetching AI response:', error);
          return {
            key: 'No',
            text: {
              'Event Name': '',
              'Day of the Week': ' ',
              'Start Time': '',
            },
          };
        }
      };

    return (
        <ChatContainer>
            <Header>
                <BackButton onClick={handleBack}>{'<'}</BackButton>
                <ContactName>{contactName}</ContactName> 
            </Header>
            <MessageArea>
                <LeftMessageRow>
                    <AIIcon>AI</AIIcon>
                    <UserMessageBubble>
                        You have been successfully matched!
                    </UserMessageBubble>
                </LeftMessageRow>

                {chatLog.map((msg, idx) => {
                    if (msg.sender === 'my-user') {
                        return (
                        <MessageRow key={idx}>
                            <UserMessageBubble>{msg.text}</UserMessageBubble>
                            <ProfileIcon src="/Profile.png" alt="You" />
                        </MessageRow>
                        );
                    } else if (msg.sender === 'ai') {
                        return (
                        <LeftMessageRow key={idx}>
                            <AIIcon>AI</AIIcon>
                            <UserMessageBubble>{msg.text}</UserMessageBubble>
                        </LeftMessageRow>
                        );
                    } else if (msg.sender === 'other-user') {
                        return (
                        <LeftMessageRow key={idx}>
                            <ProfileIcon src="/Profile.png" alt="Other User" />
                            <UserMessageBubble>{msg.text}</UserMessageBubble>
                        </LeftMessageRow>
                        );
                    }

                    return null;
                })}

                {showCalendarPrompt && (
                    <MessageWithOptions
                        text={calendarPrompt}
                        onYes={acceptCalendarInvite}
                        onNo={denyCalendarInvite}
                    />
                )}
            </MessageArea>
            <InputArea>
                <TextInput
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message..." 
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <SendButton onClick={() => handleSend()}>{'>'}</SendButton>
            </InputArea>
        </ChatContainer>
    );
};

export default ChatPage; 