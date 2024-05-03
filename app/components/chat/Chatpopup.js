import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatBot.css';


const ChatWindow = () => {
    const [conversation, setConversation] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = 'https://qrit.b-wise.ma/qrit-menu/danny.php';

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async () => {
        if (!userInput) return;

        setIsLoading(true);

        try {
            const response = await axios.post(API_URL, {
                prompt: userInput,
            });

            setConversation([
                ...conversation,
                { user: 'You', message: userInput },
                { user: 'Bot', message: response.data.response },
            ]);
        } catch (error) {
            setError('An error occurred. Please try again later.');
        } finally {
            setUserInput('');
            setIsLoading(false);
        }
    };



    return (
        <div className="chat-window">
            {conversation.map((message, index) => (
                <div key={index} className={`message ${message.user}`}>
                    {message.message}
                </div>
            ),)}
            <div className="input-container">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleUserInput}
                    disabled={isLoading}
                />
                <button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </div>
        </div>
    );
};

export default ChatWindow;