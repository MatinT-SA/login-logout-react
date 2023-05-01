import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-content';
import Input from '../UI/Input/Input';

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const emailReducer = (state, action) => {
        if (action.type === 'USER_INPUT') {
            return { value: action.val, isValid: action.val.includes('@') };
        }
        if (action.type === 'INPUT_BLUR') {
            return { value: state.value, isValid: state.value.includes('@') };
        }
        return { value: '', isValid: false };
    };

    const passwordReducer = (state, action) => {
        if (action.type === "USER_INPUT") {
            return { value: action.val, isValid: action.val.trim().length > 6 };
        }
        if (action.type === 'INPUT_BLUR') {
            return { value: state.value, isValid: state.value.trim().length > 6 };
        }
        return { value: '', isValid: false };
    }

    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

    const authCtx = useContext(AuthContext);

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('checking for form validity');
            setFormIsValid(
                emailIsValid && passwordIsValid
            );
        }, 500);

        return () => {
            console.log('cleanup');
            clearTimeout(identifier);
        }
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

        // setFormIsValid(
        //     event.target.value.includes('@') && passwordState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

        // setFormIsValid(
        //     event.target.value.trim().length > 6 && emailState.isValid
        // );
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        authCtx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input type="email" 
                id="email" 
                label="Email Address" 
                isValid={emailIsValid} 
                value={emailState.value}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                />
                <Input type="password" 
                id="password" 
                label="Password" 
                isValid={passwordIsValid} 
                value={passwordState.value}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
