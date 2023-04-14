import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
    return (
        <Card className={classes.home}>
            <h1>You are logged in now.</h1>
        </Card>
    );
};

export default Home;
