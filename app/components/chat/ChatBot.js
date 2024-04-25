import { useState, useEffect } from 'react';
import './ChatBot.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://qrit.b-wise.ma/qrit-menu/danny.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: input, prompt: 'pizza' }),
                });

                const data = await response.json();

                if (Array.isArray(data)) {
                    const promises = data.map(async (item) => {
                        const response = await fetch('https://qrit.b-wise.ma/qrit-menu/plat.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ id: item.id }),
                        });

                        const data = await response.json();
                        return { text: item.des, type: 'user' }, { text: data.response, type: 'bot' };
                    });

                    Promise.all(promises).then((results) => {
                        setMessages(results.flat());
                    });
                }

                setInput('');
            } catch (error) {
                console.log('Fetch error: ', error);
            }
        };

        if (input) {
            fetchData();
        }
    }, [input]);

    return (
        <div className="chat-container">
            <div>
                {messages.map((message, index) => (
                    <p key={index} className={`message ${message.type}`}>{message.text}</p>
                ))}
            </div>
            <div className="input-container">
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => setInput(input)}>Send</button>
            </div>
        </div>
    );
};

export default Chat;