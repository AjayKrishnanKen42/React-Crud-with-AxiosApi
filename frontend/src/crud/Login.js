import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const changePage = useNavigate();
    const [user, setUser] = useState([]);
    let emailChange = (e) => {
        setUser({ ...user, email: e.target.value })
    }
    let passwordChange = (e) => {
        setUser({ ...user, password: e.target.value })
    }
    // console.log(user);
    let login = (e) => {
        e.preventDefault();
        const sub = {
            email: user.email,
            password: user.password
        }
        axios.post("http://localhost:3500/app/Login", sub, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log(user.email);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("email", user.email);
                changePage(`/Sucesss`, {
                    state: {
                        email:user.email
                    }
                });
            })
    }

    return (
        <div>
            <center>
                <button><a href="/signup">signup</a></button>
                <button><a href="/viewdata">viewdata</a></button>
                <button><a href="/edit">edit</a></button>
                <button><a href="/login">login</a></button>
                <button><a href="/sucesss">sucesss</a></button>
            </center>
            <div>
                <h1>LoginForm</h1>
                <form onSubmit={login}>
                    Email-id:<input type="text" onChange={emailChange} /><br />
                    Password:<input type="text" onChange={passwordChange} /><br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    )
}

export default Login;