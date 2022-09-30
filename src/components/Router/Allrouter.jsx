import {Routes,Route} from "react-router-dom"
import Account from "../pages/Account"
import Cart from "../pages/cart"
import Product from "../pages/product"
import Home from "../pages/home"
import Refferals from "../pages/refer"


function Allroutes(){
    return <Routes>
         <Route path="/" element={<Home></Home>}></Route>
        <Route path="/account" element={<Account></Account>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/refferals" element={<Refferals></Refferals>}></Route>
    </Routes>
}
export default Allroutes;