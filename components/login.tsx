import * as React from 'react';

const Login: React.FC = () => {

    const [email, setemail] = React.useState<string>('');
    const [password, setpassword] = React.useState<string>('');
    const [loading, setloading] = React.useState<Boolean>(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setemail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setpassword(e.target.value);
    }

    const handleLoginSubmit = (e: React.MouseEvent<HTMLElement>) => {
        setloading(true)
        console.log("here")
    }

    return (
        <div>
            <h1>Login</h1>
            <form style={{display: `flex`, flexDirection: `column`}}>
                <input
                    id="formEmail"
                    name="email"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                />
                <input
                    id="formPassword"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                />
                <button id="loginSubmit" onClick={handleLoginSubmit}>
                    {loading ? 'Logging in...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}

export default Login;