import React from "react";
import classes from './Repositories.module.css'
import pointy from '../../img/pointy-finger.gif'

const Repositories = () => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src={pointy} alt='pointy-finger' />
            <button className={classes.contact} onClick={event => window.open('https://github.com/MatinT-SA?tab=repositories')}>
                Click to see my other GitHub Repos
            </button>
        </div>
    )
}

export default Repositories;