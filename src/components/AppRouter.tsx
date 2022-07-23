import React from 'react';
import {Routes, Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {

    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        isAuth
        ? <Routes>

                {
                    privateRoutes.map((r) => {
                        return <Route path={r.path} element={<r.element/>} key={r.path}/>
                    })
                }
        </Routes>

            : <Routes>
                {
                    publicRoutes.map((r) => {
                        return <Route path={r.path} element={<r.element/>} key={r.path}/>
                    })
                }
            </Routes>

    )


};

export default AppRouter;