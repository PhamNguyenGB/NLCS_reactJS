import {
    Switch,
    Route
} from "react-router-dom";

import _ from 'lodash';
import React, { useEffect, useState } from 'react';

const ManagerRoute = (props) => {
    const [account, setAccount] = useState({});

    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if (session) {
            setAccount(JSON.parse(session));
        }
    }, []);

    return (
        <>
            {account && !_.isEmpty(account) && account.isAuthenticated
                && <NavAdmin />
            }
            <Switch>
                {/* ADMIN */}
                <Route path="/admin" exact>
                    <LoginAdmin />
                </Route>
                <Route path="/admin/users" exact>
                    <Users />
                </Route>


                <Route path="/" exact>
                    Home
                </Route>
                <Route path="*">
                    404 not found
                </Route>
            </Switch>
        </>
    )
};

export default ManagerRoute;