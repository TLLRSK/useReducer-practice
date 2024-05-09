import { useAppContext } from "../contexts/AppContext";

const User = ({ id, name, email}) => {
    const {removeUser} = useAppContext();
    return (
        <li className="user">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button className="btn delete-btn" onClick={() => removeUser(id)}>Delete</button>
        </li>
    );
};

export default User;