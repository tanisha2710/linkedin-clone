import React, { useState } from 'react'
import "./Login.css";
import { auth } from '../FireBase/FireBase';
import { useDispatch } from 'react-redux';
import { loginUser } from "../features/UserSlice"

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const dispatch = useDispatch();
    const signUp = () => {
        if (!name) {
            return alert("Name is required");
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: image,
                    })
                    .then(() => {
                        dispatch(loginUser({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: image,
                            
                        }))
                    })
            })
            .catch(error => alert(error));
     }
    const login = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth ) => {
                dispatch(loginUser({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                
                }))
            })
            .catch(error => alert(error));
        
    };
    return (
        <div className="login">
            <img style={{height:"120px", width: "160px"}}src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" />
            <form>
                <input placeholder="Full name(required if registering"
                    type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="profile pic URL(optional)"
                    type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
                <input placeholder="Email"
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder="password"
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="Submit" onClick={login}>Sign In</button>
            </form>
            <p>
                Not a Member?
                <span onClick={signUp} className="signup">Register now</span>
            </p>
        </div>
    )
}

export default Login
