import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-content';

const Home = (props) => {
    const authCtx = useContext(AuthContext);

    return (
<<<<<<< HEAD
        <>
            <Card className={classes.home}>
                <h1>You are logged in now.</h1>
                <br />
                <Button onClick={props.onLogout}>Logout</Button>
            </Card>
        </>
=======
        <Card className={classes.home}>
            <h1>You are logged in now.</h1>
            <br />
            <Button onClick={authCtx.onLogout}>Logout</Button>
        </Card>
>>>>>>> 33f13f9090ae55773f7153c1febc94f6b7d0d714
    );
};

export default Home;
