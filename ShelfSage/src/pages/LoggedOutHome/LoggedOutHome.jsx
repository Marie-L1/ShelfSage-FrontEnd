import React from 'react'
import "./LoggedOutHome.scss"
import SignupForm from '../../components/Forms/SignupForm';
import LoginForm from "../../components/Forms/LoginForm";

function LoggedOutHome() {
  // set the initial state to the login page
  const [formType, setFormType] = useState("login");

  // able to toggle between the login and sign up forms
  const handleFormSwitch = (type) => {
    setFormType(type);
  };

  return (
    <section>
        <h2>Please Log in or Signup</h2>
        
        {formType === "login" ? (
          <LoginForm onSwitch={handleFormSwitch} />
        ) : (
          <SignupForm onSwitch={handleFormSwitch} />
        )}
    </section>
  )
}

export default LoggedOutHome