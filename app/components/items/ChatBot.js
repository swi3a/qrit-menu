import { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        // Replace this URL with the actual API endpoint of your chatbot service
        const response = await fetch('https://qrit.b-wise.ma/qrit-menu/danny.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Replace 'your_api_key' with your actual API key
                'Authorization': 'Bearer your_api_key',
            },
            body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        setMessages([...messages, { text: input, type: 'user' }, { text: data.response, type: 'bot' }]);
        setInput('');
    };

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <p key={index} className={message.type}>{message.text}</p>
                ))}
            </div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chat;
