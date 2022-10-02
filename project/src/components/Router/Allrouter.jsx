import {Routes,Route} from "react-router-dom"
import Account from "../pages/Account"
import Cart from "../pages/cart"
import Product from "../pages/product"
import Home from "../pages/home"
import Refferals from "../pages/refer"
import Signup from "../loginandsignup/signup"
import { LoginPage } from "../loginandsignup/login"
import {PrivateRoute} from "../Router/privateRouters"


function Allroutes(){
    return <Routes>
         <Route path="/" element={<Home></Home>}></Route>
        <Route path="/account" element={<Account></Account>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/refferals" element={<Refferals></Refferals>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    </Routes>
}
export default Allroutes;