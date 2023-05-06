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
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}

                <br /><br /><br />
                <Repositories />
            </main>
        </React.Fragment>
    );
}

export default App;
