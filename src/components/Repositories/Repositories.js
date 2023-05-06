import React, { useState, useEffect } from "react";
import classes from './Repositories.module.css'
import pointy from '../../img/pointy-finger.gif'

const Repositories = () => {
    const [buttonText, setButtonText] = useState("Click to see my other GitHub Repos");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 500) {
                setButtonText('My GitHub');
            } else {
                setButtonText('Click to see my other GitHub Repos');
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.addEventListener('resize', handleResize);
        }
    }, [])

    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src={pointy} alt='pointy-finger' />
            <button className={classes.contact} onClick={event => window.open('https://github.com/MatinT-SA?tab=repositories')}>
                {buttonText}
            </button>
        </div>
    )
}

export default Repositories;