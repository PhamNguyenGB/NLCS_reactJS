import {
    Switch,
    Route
} from "react-router-dom";
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import LoginAdmin from '../components/Admin/LoginAdmin/LoginAdmin';
import Users from '../components/Admin/ManagerUsers/users/Users';
import PrivateRoute from "./PrivateRoute";
import Products from "../components/Admin/ManagerUsers/Products/Products";

const AppRoute = (props) => {
    return (
        <>
            <Switch>
                <Route path="/about">
                    About
                </Route>
                <Route path="/news">
                    News
                </Route>
                <Route path="/contact">
                    Contact
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>

                <Route path="/admin" exact>
                    <LoginAdmin />
                </Route>
                <PrivateRoute path="/admin/users" component={Users} />
                <PrivateRoute path="/admin/products" component={Products} />

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

export default AppRoute;