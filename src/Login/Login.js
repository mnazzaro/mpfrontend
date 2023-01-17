import '../StartPopUp/StartPopUp';

function Login (props) {
    return (
        <StartPopUp header='Login' action={props.action}>
            <label for="email">Email:</label><br/>
            <input type="text" id="email" name="email"/><br/>
            <label for="password">Password:</label><br/>
            <input type="text" id="password" name="password"/><br/>
            <input type="submit" value="Enter"/>
        </StartPopUp>
    );
}

export default Login;