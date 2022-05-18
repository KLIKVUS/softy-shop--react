import React from 'react';


function Popup(props) {
    const {content, popupType, openPopup} = props;

    return (
        <div className="popup" onClick={() => openPopup(popupType)}>{content}</div>
    );
}

export default Popup;