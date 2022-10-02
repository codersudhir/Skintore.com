import {
    FormControl,
    FormLabel,
    Input,
    Grid,
    Button
  } from '@chakra-ui/react'
  import {useState} from "react"
import { Navigate } from 'react-router-dom'

  const init={
        firstName:"",
        lastName:"",
        email:"",
        password:""
  }


  function Signup(){
    const [text,setText]=useState(init)


    const handlechange=(e)=>{
        setText(e.target.value)
    }
    console.log(text)

    const handlesubmit=(e)=>{
        setText(text)
        window.location.href="/login"
    }
    console.log(text)

    return <Grid marginLeft={450} >
     <FormControl w="500px">
    <FormLabel>Name</FormLabel>
    <Input type='Text' onChange={handlechange} />
  </FormControl>

  <FormControl w={500}>
    <FormLabel>Last Name</FormLabel>
    <Input type='Text' onChange={handlechange} />
  </FormControl>

  <FormControl w={500} >
    <FormLabel>Email</FormLabel>
    <Input type='Text' onChange={handlechange} />
  </FormControl>

  <FormControl w={500}>
    <FormLabel>Password</FormLabel>
    <Input type='Text' onChange={handlechange} />
  </FormControl>
  <Button w={500} marginTop="30px" onClick={handlesubmit}>Signup</Button>
    </Grid> 
  }
  export default Signup;