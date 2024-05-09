import User from "./User";

const UsersList = ({list}) => {
    return (
        <div className="list-container">
            <h3>Users list</h3>
            <ul className="list">
                {list.map((user, index) => {
                    return <User key={index} {...user}/>
                })}
            </ul>
        </div>
    )
}

export default UsersList;