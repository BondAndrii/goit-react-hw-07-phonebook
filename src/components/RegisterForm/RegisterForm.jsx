

const RegisterForm = () => {
    return (
        <form>
            <label> 
                Username: 
                <input type="text" name="name"/>
            </label>
            <label> 
                Email: 
                <input type="email" name="email"/>
            </label>
            <label> 
                Password: 
                <input type="password" name="password"/>
            </label>
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;