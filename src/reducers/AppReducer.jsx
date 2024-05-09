import { nanoid } from "nanoid";
import { useReducer } from "react";
import Form from "../components/Form";
import UsersList from "../components/UsersList";

const initialState = {
    usersList: [],
    newUser: {
        id: 0,
        name: '',
        email: '',
    } 
}

const reducer = (state, action) => {
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
}

const AppReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const submitUser = (e) => {
        e.preventDefault();
        dispatch({type: 'SUBMIT_USER'});
    }
    const changeName = (payload) => {
        dispatch({type: 'CHANGE_NAME', payload})
    }
    const changeEmail = (payload) => {
        dispatch({type: 'CHANGE_EMAIL', payload})
    }

    const actions = {submitUser, changeName, changeEmail};

    return (
        <main className="app">
            <Form {...actions}/>
            <UsersList list={state.usersList}/>
        </main>
    )
}

export default AppReducer;