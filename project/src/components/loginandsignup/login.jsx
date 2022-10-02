import React from "react"
import { Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack } from "@chakra-ui/react"
import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../authcontext/appcontex"
import { Navigate } from "react-router-dom"
const userLogin=(data={})=>{
    return axios.post("https://reqres.in/api/login",data)
    
}

const intial={
    email:"",
    password:""
}



export function LoginPage(){
const [user,setUser]=useState(intial);
const {loginUser,isAuth}=useContext(AuthContext);
const [input, setInput] = useState(intial)


const isError = input === ''
const handleInputChange = (e) => {
    const {id,value}=e.target;
    setInput({...input,[id]:value})
    console.log(input)

}

const handleLogin=(e)=>{
e.preventDefault();
alert("Loged In !!!")
    userLogin(input).then(res=>{
        console.log(res.data.token);
        localStorage.setItem("token",res.data.data)
    

        loginUser(input.password,res.data.token)

    }).catch(err=>{
        console.log(err)
    })
   
}

// const Loginuser=()=>{
//     dispatch(Loginrequest())
//     return axios.POST("url").then((res)=>{dispatch(LoginSuccess(res.data.token))})
//     .catch((res)=>{dispatch(LoginFailed(res))})
//   }



if(isAuth){
    return <Navigate to="/" />
}
    return(
        <Container>
        <Stack>
        <FormControl isInvalid={isError} onSubmit={handleLogin}>
        <FormLabel>Email</FormLabel>
        <Input
        id="email"
          type='email'
          onChange={handleInputChange}
        />
        <FormLabel>Passward</FormLabel>
          <Input
           id="password"
          type='password'
          onChange={handleInputChange}
        />
        {!isError ? (
        <Input  onClick={handleLogin} type="submit" marginTop={25}></Input>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      

      
      </Stack> 
      </Container>
    )
}