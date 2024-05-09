const Form = () => {
    return (
        <form action="">
            <input type="text" className='form-name' name="name" placeholder='name'/>
            <input type="email" className='form-email' name="email" placeholder='email'/>
            <input type="submit" className="form-submit"/>
        </form>
    )
}

export default Form;