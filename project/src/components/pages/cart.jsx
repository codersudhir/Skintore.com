import { useState } from "react"
import { Flex, Spacer } from '@chakra-ui/react'
const array=JSON.parse(localStorage.getItem("storage"))||[]
console.log(array)
function Cart(){
    const [number ,setnumber]=useState(1)
    let y=JSON.parse(localStorage.getItem("total"))
   
    return <div>
        <p>Your Cart</p>
        <table style={{border:"1px solid red",textAlign:"center",alignContent:"center",width:"700px",justifyContent:"center"}}>
  <tr>
   
    <th>Product</th>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Total</th>
  </tr>
  
  <tr>
    {array.map((el)=>{
        return <td><img src={el.image_link} width="50px" alt="" /></td>
    })}
    {array.map((el)=>{
        return <td>{el.name}</td>
    })}
    {array.map((el)=>{
        const x=(Number(el.price)*number)
        localStorage.setItem("total",x)
        return <td>{el.price}</td>  
       
    })}
     {array.map((el)=>{
        return <div style={{display:"flex",justifyContent:"space-between"}}><td>
            <button style={{fontSize:"20px"}} disabled={number===1} onClick={()=>{setnumber(number-1)}}>-</button>
            </td>
            <td>{number}</td>
            <td>
            <button style={{fontSize:"20px"}} onClick={()=>{setnumber(number+1)}}>+</button>
            </td>
            </div>
    })}
    
     {array.map((el)=>{
        let y=JSON.parse(localStorage.getItem("total"))
        return <td>{y}</td>    
    })}


  </tr>
</table>
        
    </div>
}
export default Cart