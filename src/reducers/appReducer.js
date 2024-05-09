import { nanoid } from "nanoid";

export const initialState = {
    usersList: [],
    newUser: {}
};

export const reducer = (state, action) => {
    if (action.type === 'SUBMIT_USER') {
        let newUserWithId = { ...state.newUser, id: nanoid() };
        return {...state, usersList: [...state.usersList, newUserWithId]};
    }
    if (action.type === 'CHANGE_NAME') {
        return {...state, newUser: {...state.newUser, name: action.payload}};
    }
    if (action.type === 'CHANGE_EMAIL') {
        return {...state, newUser: { ...state.newUser, email: action.payload}};
    }   
    if (action.type === 'REMOVE_USER') {
        const newUsersList = state.usersList.filter((user) => user.id !== action.payload);
        return {...state, usersList: newUsersList};
    }   
    return state;
}