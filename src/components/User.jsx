const User = (user) => {
    const {name, email} = user;
    return (
        <li className="user">
            <p>{name}</p>
            <p>{email}</p>
        </li>
    )
}

export default User;