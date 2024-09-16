import React from 'react'
import "./LoggedOutHome.scss"
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoggedOutHome() {
  return (
    <section>
        <h2>Please Log in or Signup</h2>
        <div className="login">
        </div>
        <div className="Signup">
      

        </div>
    </section>
  )
}

export default LoggedOutHome