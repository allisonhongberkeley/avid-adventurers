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
    text: string;
};

const ChatPage: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [chatLog, setChatLog] = useState<Message[]>([]);
    const socketRef = useRef<WebSocket | null>(null);
    const [userId] = useState(() => crypto.randomUUID());
    const [calendarPrompt, setCalendarPrompt] = useState('');
    const [showCalendarPrompt, setShowCalendarPrompt] = useState(false);
    const [showHangoutPrompt, setShowHangoutPrompt] = useState(false);
    const { firstName } = useOnboarding();
    const navigate = useNavigate();

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

    const acceptCalendarInvite = () => {
        setShowCalendarPrompt(false);
        setShowHangoutPrompt(true);
    };

    const denyCalendarInvite = () => {
        setShowCalendarPrompt(false);
    };

    const acceptHangout = () => {
        navigate('/survey/congrats');
    };

    const denyHangout = () => {
        setShowHangoutPrompt(false);
    }

    const handleBack = () => {
        navigate('/home');
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
        if (aiMessage.key ==='Yes') {
            console.log("AI suggested a calendar invite");
            setShowCalendarPrompt(true);
            setCalendarPrompt(aiMessage.text);
        }
      };
      

      /* Based on the last two Chat Logs, decide to send calendar invite or not. After u
      ser clicks Yes to Calendar invite, send "Did you hang out?" redirect. */
      const fetchMessageResponse = async (conversationHistory: Message[]): Promise<AIResponse> => {
        /* We need to convert the conversation to a string so that it's parsed correctly by Reagant*/
        const conversationString = conversationHistory
            .map((msg) => `${msg.sender}: ${msg.text}`)
            .join('\n');
        console.log(conversationString);
        try {
          const response = await fetch('https://noggin.rea.gent/smiling-tarantula-4597', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer rg_v1_7m95qdgnyxeo6r4chhlngtuec0c7wn0hwjfz_ngk',
            },
            body: JSON.stringify({
                "conversationHistory": conversationString,
              }),
          });
      
          const data = await response.json();
          const signal = Object.keys(data)[0];
      
          if (signal === 'Yes' || signal === 'No') {
            return { key: signal, text: data[signal] };
          } else {
            throw new Error(`Unexpected AI signal: ${signal}`);
          }
      
        } catch (error) {
          console.error('Error fetching AI response:', error);
          return { key: 'No', text: 'Sorry, something went wrong.' };
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

                {showHangoutPrompt && (
                    <MessageWithOptions
                        text="Did the hangout happen?"
                        onYes={acceptHangout}
                        onNo={denyHangout}
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