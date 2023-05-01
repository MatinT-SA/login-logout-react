import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-content';

const Home = (props) => {
    const authCtx = useContext(AuthContext);

    return (
        <Card className={classes.home}>
            <h1>You are logged in now.</h1>
            <br />
            <Button onClick={authCtx.onLogout}>Logout</Button>
        </Card>
    );
};

export default Home;
