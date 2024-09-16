import React from 'react'

function SignupForm() {
  return (
    <div>
    <h2 className="">Signup</h2>
    <form className="">
        <div className="">
            <label className="">Username</label>
            <input className="" placeholder="username"></input>
        </div>

        <div className="">
            <label className="">Email</label>
            <input className="" placeholder="email"></input>
        </div>

        <div className="">
            <label className="">Password</label>
            <input className="" placeholder="password"></input>
        </div>

        <button className="" type="submit">Login</button>

        <p className="">Already have an account? <button className="" type="button"  onClick={() => onSwitch("login")}>Signup</button></p>
    </form>
</div>
  )
}

export default SignupForm;