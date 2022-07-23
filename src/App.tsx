import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import {Navbar} from "./components/Navbar";
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

const App = () => {

    const {setAuth, setUser} = useActions()

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setAuth(true)
            setUser({username: localStorage.getItem('username')  } as IUser)
        }
    })

    return (
        <>
            <Navbar/>
            <AppRouter/>
        </>


    );
};

export default App;