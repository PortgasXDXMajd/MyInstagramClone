import { USER_STATE_CHANGED } from '../constants/index.js';

const initialState = {
    currentUser: null,
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGED:
            return {
                ...state,
                currentUser: action.currentUser
            }

        default:
            return state;
    }
}