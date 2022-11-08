import { useState, useContext } from "react";
import {
  auth,
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from './../../contexts/user.context';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFileds, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFileds;
  // Selected use context
  const { setCurrentUser } = useContext(UserContext);

  // Reset form fields
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Sing with Google
  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // Submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // store user information into user context storage
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Account not found");
          break;
        case "auth/wrong-password":
          alert("Password or Email was incorrect");
          break;
        default:
          console.log(error);
      }
    }
  };

  // Change handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFileds, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={SignInWithGoogle}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
