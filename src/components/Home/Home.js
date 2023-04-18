import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';

const Home = (props) => {
    return (
        <Card className={classes.home}>
            <h1>You are logged in now.</h1>
            <br />
            <Button onClick={props.onLogout}>Logout</Button>
        </Card>
    );
};

export default Home;
