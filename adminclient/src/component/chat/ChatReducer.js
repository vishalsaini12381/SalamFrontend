import { TYPES } from './ChatActionTypes';

const defaultState = {
    messageList: [],
    message: '',
};

const chatReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TYPES.SEND_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        case TYPES.ADD_MESSAGE_TO_LIST:
            return {
                ...state,
                message:'',
                messageList: [...state.messageList, action.message]
            }
        default:
            return state;
    }
}

export default chatReducer