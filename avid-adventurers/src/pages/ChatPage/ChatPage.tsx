<<<<<<< HEAD
import React, { useState, useEffect, useRef} from 'react';
import { useOnboarding } from '../../utils/onboardingContext';
import { useNavigate } from 'react-router-dom';
import { MessageWithOptions } from '../../components/MessageWithOptions/MessageWithOptions';


=======
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
>>>>>>> 2661f8ea (feat: Implement Chat Inbox page and Chat Page navigation)
import {
    BackButton,
    ChatContainer,
    Header,
    ContactName,
    MessageArea,
    UserMessageBubble,
    InputArea,
    TextInput,
<<<<<<< HEAD
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
    const apiKey = process.env.REAGANT_API_KEY;

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
=======
    AddButton,
    PageWrapper,
    BackButton,
    Title,
    MessageInput,
    SendButton
} from './ChatPageStyles';

// Temporary data structure - ideally fetch based on chatId
const sampleChats = [
    { id: 1, name: 'Tyler', interest: 'Skateboarding', message: 'Hi Claire! You like skateboarding...', time: '2:15 PM', unread: 1, initial: 'T' },
    { id: 2, name: 'Emma', interest: 'Hiking', message: 'What\'s your favorite....', time: '11:17 AM', unread: 0, initial: 'E' },
    { id: 3, name: 'Jason', interest: 'Cooking', message: 'Let\'s meet at 5 pm at...', time: '10:15 AM', unread: 0, initial: 'J' },
    { id: 4, name: 'Miguel', interest: 'Jazz', message: 'I\'m going to a concert near...', time: '9:07 AM', unread: 0, initial: 'M' },
];

const ChatPage: React.FC = () => {
    const navigate = useNavigate();
    const { chatId } = useParams<{ chatId: string }>();

    // Find the chat partner based on chatId (convert chatId string to number)
    const chatPartner = sampleChats.find(chat => chat.id === Number(chatId));
    const partnerName = chatPartner ? chatPartner.name : 'Chat'; // Default title

    const handleBack = () => {
        navigate(-1); // Go back to the previous page (which should be ChatInbox)
        // Alternatively, navigate('/inbox'); 
    };

    // State to manage the text input value
    const [inputText, setInputText] = React.useState('Hey Tyler!');

    // Placeholder function for sending a message
    const handleSend = () => {
        console.log('Send message clicked');
>>>>>>> 2661f8ea (feat: Implement Chat Inbox page and Chat Page navigation)
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
              Authorization: `Bearer ${apiKey}`,
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
        <PageWrapper>
            <Header>
<<<<<<< HEAD
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

=======
                <BackButton onClick={handleBack}>&lt;</BackButton>
                <Title>{partnerName}</Title> {/* Display chat partner's name */}
            </Header>
            <MessageArea>
                {/* Messages will be displayed here */}
                <p>Messages for {partnerName} go here...</p>
>>>>>>> 2661f8ea (feat: Implement Chat Inbox page and Chat Page navigation)
            </MessageArea>
            <InputArea>
                <MessageInput
                    placeholder="Hey Tyler!"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
<<<<<<< HEAD
                    placeholder="Type a message..." 
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <SendButton onClick={() => handleSend()}>{'>'}</SendButton>
=======
                />
                <SendButton onClick={handleSend}>+</SendButton>
>>>>>>> 2661f8ea (feat: Implement Chat Inbox page and Chat Page navigation)
            </InputArea>
        </PageWrapper>
    );
};

export default ChatPage; 