import { nanoid } from "nanoid";
import { useReducer } from "react";

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

    return (
        <main className="app">
            <form action="" className="form" onSubmit={(e) => submitUser(e)}>
                <input type="text" className='form-name' name="name" placeholder='name' onChange={(e) => changeName(e.target.value)}/>
                <input type="email" className='form-email' name="email" placeholder='email' onChange={(e) => changeEmail(e.target.value)}/>
                <input type="submit" className="form-submit"/>
            </form>
            <div className="list-container">
                <h3>Users list</h3>
                <ul className="list">
                    {state.usersList.map((user, index) => {
                        const {name, email} = user;
                        return (
                            <li key={index}>
                                <p>{name}</p>
                                <p>{email}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}

export default AppReducer;