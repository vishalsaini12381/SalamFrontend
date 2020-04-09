import { TYPES } from './ChatActionTypes';

export const sendMessageAction = (message) => {
    return {
        type: TYPES.SEND_MESSAGE,
        message
    }
}


export const addMessageToListAction = (message) => {
    return {
        type: TYPES.ADD_MESSAGE_TO_LIST,
        message
    }
}
