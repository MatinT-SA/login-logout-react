import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-content';
import Repositories from './components/Repositories/Repositories';

function App() {
    const ctx = useContext(AuthContext);

    return (
        <React.Fragment>
            <MainHeader />
            <main>
<<<<<<< HEAD
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}

                <br /><br /><br /><br />
                <Repositories />
=======
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
>>>>>>> 33f13f9090ae55773f7153c1febc94f6b7d0d714
            </main>
        </React.Fragment>
    );
}

export default App;
