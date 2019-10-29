import React, {useState} from 'react';
import './chat-component.css'
import {Button} from "../ButtonComponent/button-component";

const ChatComponent =  ({messages, postMessage, userId}) => {
    const [message, updateMessage] = useState('');

    return (
        <div className="chat">
            <div className="chat__user">
                <div>Hey <span role="img" aria-label="hand">👋</span> {userId}!</div>
            </div>
            <div className="chat__feed">
                {messages.map(({userId: messageUserId, message, timestamp}, v) =>
                    <div key={v}>{`${timestamp || ''} ${messageUserId === userId ? 'me' : messageUserId}:${message}`}</div>)}
            </div>
            <div className="chat__actions">
                <input name="message"
                       className="chat__actions--input"
                       value={message}
                       onChange={(event) => updateMessage(event.target.value)}
                       placeholder="write something here..."/>
                <Button onClick={() => {
                    if (message) {
                        updateMessage('');
                        postMessage(userId, message);
                    }
                }}>post</Button>
            </div>
        </div>

    )
};

export default ChatComponent;