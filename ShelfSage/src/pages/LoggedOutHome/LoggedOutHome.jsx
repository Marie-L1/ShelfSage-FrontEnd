import React, {useState} from 'react'
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
        
        {formType === "login" ? (
          <LoginForm onSubmitForm={handleFormSwitch} />
        ) : (
          <SignupForm onSubmitForm={handleFormSwitch} />
        )}
    </section>
  )
}

export default LoggedOutHome