import {Link, Navigate, NavLink} from "react-router-dom"
import { useState } from "react"

import axios from "axios"
import { Grid, GridItem,Menu,MenuButton,MenuList,MenuItem } from '@chakra-ui/react'

import { Flex, Spacer,Box, InputGroup,Button, Image,InputRightElement,Input,Text} from '@chakra-ui/react'



function Navbar(){
    const [input,setinputvalue]=useState("")
    const [data,setdata]=useState([])
    
    const handlechange=(e)=>{
       setinputvalue(e.target.value)
    }

    console.log(input)
    const handlesubmit=(input)=>{
      axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${input}`)
     .then((res)=>{setdata(res.data)})
   
    }
    console.log(data)
    let storage=[]||JSON.stringify(localStorage.getItem("storage"))
    const product=(el)=>{
      console.log(el)
      storage.push(el)
      localStorage.setItem("storage",JSON.stringify(storage))
      window.location.href="/cart"
    }

    return <div><div><Flex minWidth='max-content' alignItems='center' gap='2'  border="1px solid black" marginLeft={"15px"} marginRight={"15px"}>
    <Box p='2'>
      <a href="/"><Image w={"200px"}
      objectFit='cover'
      src='https://i.pinimg.com/736x/5d/6a/79/5d6a794b43687bb99c8c5cc90903818b.jpg'
      alt='skintore'   /></a>
    </Box>
    <Spacer />
    <Box>
    <InputGroup width="full">
        <Input width={"400px"}
        height="30px"
          type="text"
          name="input"
          onChange={handlechange}
          placeholder='Enter Product Brand and or Name'
        />
        <InputRightElement  >
          <button height="36px" border="1px solid white" onClick={()=>handlesubmit(input)} ><NavLink to="/product"><Image src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" boxSize='25px'marginBottom="10px"
    objectFit='cover' alt="" /></NavLink>
          
          </button>
        </InputRightElement>
      </InputGroup>
      </Box>
    <Spacer />
    <Box >
   <Button border="1px solid white" bg={"white"} fontWeight="bold" fontSize={18}><Menu>
  <MenuButton bg="white" as={Button}>
   Account
  </MenuButton>
  <MenuList>
    <MenuItem minH='48px'>
      <Button w="250px" height="35px" border="1px solid white" bg="black" color={"white"}>Login</Button>
    </MenuItem>
    <MenuItem minH='40px'>
      <Button w="250px" height="35px" border="1px solid white" bg="black" color={"white"}>Sign-up</Button>
    </MenuItem>
    <MenuItem minH='40px'>
      <a href="">Wishlist</a>
    </MenuItem>
    <MenuItem minH='40px'>
      <a href="/cart">Your Order</a>
    </MenuItem>
    <MenuItem minH='40px'>
      <a href="/refferals" color="black">Refferals</a>
    </MenuItem>
  </MenuList>
</Menu></Button>
    </Box>
    <Spacer />
    <Box >
    <Button border="1px solid white" bg={"white"} fontWeight="bold" fontSize={18}><Menu>
  <MenuButton bg="white" as={Button}>
   Cart
  </MenuButton>
  <MenuList>  
  <MenuItem minH='40px'>
      <p>Total</p>
    </MenuItem>
    <MenuItem minH='40px'>
      <Button><a href="/cart">View Cart</a></Button>
    </MenuItem>
    
  </MenuList>
</Menu></Button>
    
    </Box>
  </Flex>
  </div>

  <Grid templateColumns='repeat(4, 1fr)' width="100%" gap={10} textAlign="center" marginTop="15px" >
    {data.map((el)=>{
      return <GridItem   gap={5} border="1px solid black" >
      <Image src={el.image_link} boxSize='200px' height={"200px"} alt='Dan Abramov' marginLeft="60px" />
      <Text>{el.name}</Text>
      <Text>Price : {el.price}</Text>
      <Button w="100%" height={"30px"} bg="black" color="white" variant='outline' onClick={()=>product(el)}>
    Quick Buy
  </Button>

    </GridItem>
    })}
 </Grid>

  </div>
}
export default Navbar
