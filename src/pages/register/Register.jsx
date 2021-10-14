import { Link } from "react-router-dom"
import "./register.css"
import {auth} from '../../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'


export default function Register() {

    const register = (e)=>{
        e.preventDefault()
        const form = document.forms['register']
        const email = form.email.value
        const password =form.password.value
        createUserWithEmailAndPassword(auth,email,password).then((es)=>{
            console.log('dsfds');
        })
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form name='register' className="registerForm">
                <label >Username</label>
                <input type="text" className="registerInput" placeholder="Enter your Username......."/>
                <label >Email</label>
                <input type="text" name='email' className="registerInput" placeholder="Enter your Email......."/>
                <label >Password</label>
                <input type="password" name='password' className="registerInput" placeholder="Enter your Password......."/>
       <button onClick={register} className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
          <Link className="link" to="/login">Login</Link>
            </button>
        </div>
    )
}
