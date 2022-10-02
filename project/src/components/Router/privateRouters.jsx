import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../authcontext/appcontex";
export function PrivateRoute({children}){
    const {isAuth}=useContext(AuthContext);
    if(!isAuth){
        return <Navigate to="/login" />
    }
    return children;
}