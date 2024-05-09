const User = (user) => {
    const {name, email} = user;
    return (
        <li className="user">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </li>
    )
}

export default User;