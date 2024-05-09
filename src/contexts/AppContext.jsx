import { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from '../reducers/appReducer';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

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
    const removeUser = (payload) => {
        dispatch({type: 'REMOVE_USER', payload})
    }

    const formActions = {submitUser, changeName, changeEmail};

    return (
        <AppContext.Provider value={{ state, dispatch, formActions, removeUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
