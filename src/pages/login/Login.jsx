import { Link } from "react-router-dom"
import "./login.css"
import {auth} from '../../firebase'
import {signInWithEmailAndPassword} from "firebase/auth"

export default function Login() {
    
    const login = (e)=>{
        e.preventDefault()
        const form = document.forms['login']
        const email = form.email.value
        const password =form.password.value
        signInWithEmailAndPassword(auth,email,password).then((es)=>{
            console.log('done');
        })
    }    
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form name='login' className="loginForm">
                <label >Email</label>
                <input type="text" name='email' className="loginInput" placeholder="Enter your Email......."/>
                <label >Password</label>
                <input type="password" name='password' className="loginInput" placeholder="Enter your Password......."/>
       <button onClick={login} className="loginButton">Login</button>
            </form>
            <button onClick={login} className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}
