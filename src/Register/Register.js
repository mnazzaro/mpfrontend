import '../StartPopUp/StartPopUp';

function Register (props) {
    return (
        <StartPopUp header='Register' action={props.action}>
            <label for="email">Email:</label><br/>
            <input type="text" id="email" name="email"/><br/>
            <label for="username">Username:</label><br/>
            <input type="text" id="username" name="username"/><br/>
            <label for="password">Password:</label><br/>
            <input type="password" id="password" name="password"/><br/>
            <label for="confirm-password">Confirm Password:</label><br/>
            <input type="password" id="confirm-password" name="confirm-password"/><br/>
            <input type="submit" value="Enter"/>
        </StartPopUp>
    );
}

export default Register;