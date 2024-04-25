import React, { useState } from 'react';
import './Popup.css';
import ChatBot from "./chat/ChatBot";
import './chat/ChatBot.css'

function Popup() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop:'170px' ,height: '100vh' }}>
                <button
                    className="absolute font-mono font-semibold text-slate-700 w-[130px] h-[50px] bg-red-400 rounded"
                    onClick={togglePopup}

                >
                    Ask Danny
                </ button>
            </div>

            {showPopup && (
                <div className="absolute ">
                    <div className="popup-background">
                        <div className="popup-content">
                            <button onClick={togglePopup}>X</button>
                            <ChatBot />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Popup;