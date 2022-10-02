import { useState } from "react"
import { Flex, Input,Button } from '@chakra-ui/react'
import { NavLink } from "react-router-dom"
const array=JSON.parse(localStorage.getItem("storage"))||[]
console.log(array)
function Cart(){

    const [number ,setnumber]=useState(1)
    const [text,settext]=useState()

    let y=JSON.parse(localStorage.getItem("total"))||[]

    const handleChange=(e)=>{
        settext(e.target.value)
    }
    console.log(text)
 
    const handlecoupon=()=>{

        if(text=="Skintor10"){
            
         y=JSON.parse(localStorage.getItem("total"))
         const  a=(y-y*0.1)
           localStorage.setItem("total",a)
           window.location.href="/cart"
        }else{
            window.location.href="/cart"
        }

    }

    
   
    return <div>
        <h1 style={{fontWeight:"bold",fontSize:"40px"}}>Your Cart</h1>
        <table style={{border:"1px solid black",marginLeft:"30px",textAlign:"center",alignContent:"center",width:"700px",justifyContent:"center"}}>
  <tr>
   
    <th>Product</th>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Total</th>
  </tr>
  
  <tr style={{border:"1px solid black"}}>
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
        return <td>{y} .RS</td>    
    })}


  </tr>
</table>

<Flex marginLeft="570px" marginTop="30px"><p>Cart SubTotal : {y} .Rs</p></Flex>

<Flex><Input width="400px" focusBorderColor='black'
 placeholder="Got a Coupon Code enter It here   ex=Skintor10" 
 marginLeft="150px" marginTop="30px" 
 border="1px solid black"
 borderRadius="0%" onChange={handleChange}></Input>
 <Button marginTop="30px" borderRadius="0%" onClick={handlecoupon}>ADD</Button>
 </Flex>
 <Flex marginTop="20px" >
    <NavLink to="/"> <Button marginLeft="30px" bg="black" color="white" borderRadius="0%">Continue Shooping</Button></NavLink>
   
    <Button marginLeft="380px" bg="black" color="white" borderRadius="0%">Checkout Securely Now</Button>
</Flex>    
    </div>
}
export default Cart