import React, {useReducer} from 'react';
import './chat-container.css';
import ChatComponent from '../ChatComponent/chat-component.js'
import {Button} from "../ButtonComponent/button-component";
import {entityTypes} from "../store/entity-consts";
import {addMessage, addUser, getRandomUserName} from "../store/chat-actions";
import {reducer} from "../store/entity-reducer";

const INITIAL_USER_COUNT = 2;

const initialState = {
    [entityTypes.USERS]: Array.from(Array(INITIAL_USER_COUNT), getRandomUserName),
    [entityTypes.MESSAGES]: []
};

function ChatContainer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="chat-container">
            <Button onClick={() => addUser(dispatch)}>JOIN</Button>
            <div className="chat-windows">
                {state[entityTypes.USERS].map(
                    (userId, index) =>
                        <ChatComponent key={index}
                                       messages={state[entityTypes.MESSAGES]}
                                       postMessage={(...args) => dispatch(addMessage(...args))}
                                       userId={userId}/>
                )}
            </div>
        </div>
    );
}

export default ChatContainer;
