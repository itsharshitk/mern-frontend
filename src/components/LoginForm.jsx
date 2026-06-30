import { useState } from "react";
import './components.css';

function LoginForm () {
    const [email, setEmail] = useState("");

    return(
        <>
            <div className="loginForm">
                <input 
                className="loginInput" 
                type="email" 
                value={email} 
                onChange={(e) => {setEmail(e.target.value)}} 
                placeholder="Enter your email" 
                />
            </div>
            
            <h2>Email is: {email}</h2>
        </>
    );
}

export default LoginForm;