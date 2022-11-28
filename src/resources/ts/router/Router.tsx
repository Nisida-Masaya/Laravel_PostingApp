import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import { Login } from "../component/pages/Login";
import { Page404 } from "../component/pages/Page404";
import { HeaderLayout } from "../component/templates/HeaderLayout";
import { HomeRoutes } from "./HomeRoutes";
import { useAuthenticate } from "../hooks/useAuthenticate";

export const Router = () => {
    const { isAuth } = useAuthenticate();

    // useEffect(() => {
    //     axios
    //         .post("/api/login", {
    //             email: "yamada@example.com",
    //             password: "password",
    //         })
    //         .then((res) => {
    //             console.log(res);
    //             console.log("ログイン成功");
    //         }).catch(() => {console.log('ログイン失敗')});
    // });

    return (
        <Switch>
            
                <Route exact path="/">
                    <Login></Login>
                </Route>
            
                <Route
                    path="/home"
                    render={({ match: { url } }) => (
                        <Switch>
                            {HomeRoutes.map((route) => (
                                <Route
                                    key={route.path}
                                    exact={route.exact}
                                    path={`${url}${route.path}`}
                                >
                                    <HeaderLayout>
                                        {route.children}
                                    </HeaderLayout>
                                </Route>
                            ))}
                        </Switch>
                    )}
                />
            
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    );
};
