import React from "react";

function LoginForm({ onSubmitForm }) {


  return (
    <div>
        <h2 className="">Login</h2>
        <form className="">
            <div className="">
                <label className="">Username</label>
                <input className="" placeholder="username"></input>
            </div>

            <div className="">
                <label className="">Password</label>
                <input className="" placeholder="password"></input>
            </div>

            <button className="" type="submit">Login</button>

            <p className="">Don't have an account? <button className="" type="button"  onClick={() => onSwitch("signup")}>Signup</button></p>
        </form>
    </div>
  )
}

export default LoginForm;