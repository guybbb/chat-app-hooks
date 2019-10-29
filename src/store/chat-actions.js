import {getRandomInt} from "../misc/utils";
import {entityTypes} from "./entity-consts";
import {addEntity} from "./entity-reducer";

export const getRandomUserName = () => {
    const nameList = ['panda', 'monkey', 'giraffe'];
    return `${nameList[getRandomInt(nameList.length)]}-${getRandomInt(1000)}`

};


export const addMessage = (userId, message) => {
    const timestamp = new Date().toLocaleTimeString(navigator.language);
    return addEntity(entityTypes.MESSAGES, {timestamp, userId, message});
};

export const addUser = (dispatch) => {
    const newUserName = getRandomUserName();
    dispatch(addEntity(entityTypes.USERS, newUserName));
    dispatch(addMessage('system', `${newUserName} joined!`))
};