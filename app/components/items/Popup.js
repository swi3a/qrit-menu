import React, { useState } from 'react';
import './Popup.css';

function Popup() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <div
                className="absolute top-[174px] left-[38px] w-[321px] h-[43px] text-base text-gray-600"
                onClick={togglePopup}
            >
                <input
                    type="search"
                    className="absolute top-[0px] left-[0px] rounded-mini shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] box-border w-[321px] h-[43px] border-[0.5px] border-solid border-gray-500"
                    placeholder="Search for Food"
                />
                <button
                    className="absolute top-[0px] right-[0px] w-[43px] h-[43px] bg-[#FFD700] rounded-mini"
                />
            </div>

            {showPopup && (
                <div className="popup">
                    {/* Your popup content goes here */}
                </div>
            )}
        </div>
    );
}

export default Popup;