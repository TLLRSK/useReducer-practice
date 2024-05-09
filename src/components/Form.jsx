import { useAppContext } from "../contexts/AppContext";

const Form = () => {
    const {formActions} = useAppContext();
    const {submitUser, changeName, changeEmail} = formActions;
    
    return (
        <form action="" className="form" onSubmit={(e) => submitUser(e)}>
            <input type="text" className='form-name' name="name" placeholder='name' onChange={(e) => changeName(e.target.value)}/>
            <input type="email" className='form-email' name="email" placeholder='email' onChange={(e) => changeEmail(e.target.value)}/>
            <input type="submit" className="form-submit"/>
        </form>
    )
}

export default Form;