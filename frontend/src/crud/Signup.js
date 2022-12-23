import React, { useState } from "react";
import axios from "axios";

function Signup() {
    const [user, setUser] = useState({
        firstname: "",
        lastname : "",
        email    : "",
        password : ""
    });

    const FirstName = (event) => {
        setUser({ ...user, firstname: event.target.value });
    };
    const SecondName = (event) => {
        setUser({ ...user, lastname: event.target.value });
    };
    const Email = (event) => {
        setUser({ ...user, email: event.target.value });
    };
    const Password = (event) => {
        setUser({ ...user, password: event.target.value });
    };

     let PostData = (event) => {
        event.preventDefault();
        const reg = {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
        };
        // console.log(registered);
        axios.post("http://localhost:3500/app/signUp", reg, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));

    }
    return (
        <div>
            <center>
                <button><a href="/signup">  signup  </a></button>
                <button><a href="/viewdata">viewdata</a></button>
                <button><a href="/edit">    edit    </a></button>
                <button><a href="/login">   login   </a></button>
                <button><a href="/sucesss"> sucesss </a></button>
            </center>

            <div>
                <form onSubmit={PostData}>
                    <input type="text"      placeholder="Enter First Name"   onChange={FirstName}    required />
                    <input type="text"      placeholder="Enter Second Name"  onChange={SecondName}   required />
                    <input type="email"     placeholder="Enter Email Id"     onChange={Email}        required />
                    <input type="password"  placeholder="Enter password"     onChange={Password}     required />
                    <input type="submit"    value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Signup;