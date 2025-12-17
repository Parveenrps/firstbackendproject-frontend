import React, { useState } from "react";

function Login(){
    const [form, setForm] = useState({username: "", email: "", password: ""})

    const changeHandler = (e) =>{
        setForm({...form, [e.target.name] : e.target.value})
    }

    const submitHandler= (e)=>{
        e.preventDefault();
    }
    return (
    <>
        <div>
            <form onSubmit={submitHandler}>
                <label>Username: </label>
                <input
                label="username"
                type="text"
                name="username"
                placeholder="username"
                value={form.username}
                onChange={changeHandler}
                />

                <label>email: </label>
                <input
                type="email"
                name="email"
                placeholder="email"
                value={form.email}
                onChange={changeHandler}
                />

                <label>password: </label>
                <input
                type="password"
                name="password"
                placeholder="password"
                value={form.password}
                onChange={changeHandler}
                />

                <button type="submit">Login</button>

            </form>

        </div>
    
    </>
    )
}

export default Login