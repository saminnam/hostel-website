import React, { useState } from 'react';
import './LoginPopUp.css';
import { Assets } from '../../Assets/Assets';

const LoginPopUp = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Simple email regex for validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validate = () => {
        const errors = {};
        if (currState === "Sign Up" && !formValues.name.trim()) {
            errors.name = "Name is required";
        }
        if (!validateEmail(formValues.email)) {
            errors.email = "Invalid email format";
        }
        if (formValues.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }
        return errors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
            // Submit the form or perform further actions
            console.log('Form submitted successfully!', formValues);
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className='login_popup'>
            <form className='login_popup_container' onSubmit={handleSubmit}>
                <div className='login_popup_title'>
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={Assets.cross_icon} alt='' />
                </div>
                <div className='login_popup_inputs'>
                    {currState === "Sign Up" && (
                        <>
                            <input
                                type='text'
                                name='name'
                                placeholder='Your name'
                                value={formValues.name}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.name && <p className='error'>{formErrors.name}</p>}
                        </>
                    )}
                    <input
                        type='email'
                        name='email'
                        placeholder='Your email'
                        value={formValues.email}
                        onChange={handleInputChange}
                        required
                    />
                    {formErrors.email && <p className='error'>{formErrors.email}</p>}
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={formValues.password}
                        onChange={handleInputChange}
                        required
                    />
                    {formErrors.password && <p className='error'>{formErrors.password}</p>}
                </div>
                <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className='login_popup_condition'>
                    <input type='checkbox' required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ? (
                    <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                )}
            </form>
            {isSubmitted && <p className='success'>Form submitted successfully!</p>}
        </div>
    );
};

export default LoginPopUp;
