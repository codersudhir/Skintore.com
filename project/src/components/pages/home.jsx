import SlideShow from "../slideshow/slideshow"
import { Image,Flex, Img } from '@chakra-ui/react'
import axios from "axios"
import { useState } from "react"
import { Grid, GridItem,Text,Button,Box } from '@chakra-ui/react'
import { Link } from "react-router-dom"


function Home(){
    const [data,setdata] =useState([])
    const [trending,setTrending]=useState([])

    const Skincare=()=>{
        axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_category=cream&product_type=blush`)
        .then((Res)=>{setdata(Res.data)})
    
    }
    const makup=()=>{
        axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=blush`)
        .then((Res)=>{setdata(Res.data)})
    
    }
    const Tools=()=>{
        axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Canadian&product_type=eyeliner`)
        .then((Res)=>{setdata(Res.data)})
    
    }
    const bath=()=>{
        axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=EWG+Verified&product_type=blush`)
        .then((Res)=>{setdata(Res.data)})
    
    }
    const selfcare=()=>{
        axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Gluten+Free&product_type=nail_polish`)
        .then((Res)=>{setdata(Res.data)})
    
    }
    const Trending=()=>{
        axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=lipstick`)
        .then((Res)=>{setTrending(Res.data)})
    
    }
    Trending()
    
    let storage=[]||JSON.stringify(localStorage.getItem("storage"))
    const product=(el)=>{
      console.log(el)
      storage.push(el)
      localStorage.setItem("storage",JSON.stringify(storage))
      window.location.href="/Cart"
    }

    return <div>
        <SlideShow></SlideShow>
        <h1 style={{fontSize:"20px",fontWeight:"bolder",marginTop:"15px"}}>Shop By Catagory</h1>
        <Flex justifyContent="space-evenly" marginTop="15px">
        <Image borderRadius="50%" onClick={Skincare} boxSize='200px'objectFit='cover' src='https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png' alt='Dan Abramov' />    
        <Image borderRadius="50%" onClick={makup} boxSize='200px' objectFit='cover' src='https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png' alt='Dan Abramov' />
        <Image borderRadius="50%" onClick={Tools} boxSize='200px'objectFit='cover' src='https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png' alt='Dan Abramov' />
        <Image borderRadius="50%" onClick={bath} boxSize='200px'objectFit='cover' src='https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png' alt='Dan Abramov' />
        <Image borderRadius="50%" onClick={selfcare} boxSize='200px'objectFit='cover'  src='https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png' alt='Dan Abramov' />
        </Flex>
        <Grid templateColumns='repeat(4, 1fr)' width="100%" gap={10} textAlign="center" >
    {data.map((el)=>{
      return <GridItem   gap={5} border="1px solid black" >
      <Image src={el.image_link} boxSize='200px' height={"200px"} alt='Dan Abramov' marginLeft="60px" />
      <Text>{el.name}</Text>
      <Text>Price : {el.price}</Text>
      <Button w="100%" height={"30px"} bg="black" color="white" variant='outline' borderRadius="0%" onClick={()=>product(el)}>
    Quick Buy
  </Button>

    </GridItem>
    })}
 </Grid>
 <Box >
  <Image width="100%" marginTop="15px" height="200px" border="2px solid black" src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/33/0907-STDCRE-40923-JCS-Skinstore_September_Referral_Campaign_NoCTA_Strip%28Trade%29-1180x200_copy-012133.jpg' alt='Dan Abramov' />
</Box>
<h1 style={{fontSize:"20px",fontWeight:"bolder",marginTop:"15px"}}>What People Are Buying Right Now</h1>
<Grid  w="full"
   templateColumns={{
    base:"repeat(1,1fr)",
    md:"repeat(2,1fr)",
    lg:"repeat(4,1fr)"
   }} marginTop="15px" width="100%" gap={10} textAlign="center" >
    {trending.map((el)=>{
      return <GridItem   gap={5} border="1px solid black;" >
      <Image src={el.image_link} boxSize='200px' height={"200px"} alt='Dan Abramov' marginLeft="60px" />
      <Text fontSize="15px">{el.name}</Text>
      <Text>Price : {el.price}</Text>
      <Button  w="100%" marginBottom="0%" height={"30px"} borderRadius="0%" bg="black" color="white" variant='outline' onClick={()=>product(el)}>
    Quick Buy
  </Button>

    </GridItem>
    })}
 </Grid>


<Box >
  <Image width="100%" marginTop="15px" height="200px" border="2px solid black" src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/32/original-0308-STDCRE32346-SS-AH-SkinStore-Concierge-Banners-1180x200-084632.jpg' alt='Dan Abramov' />
</Box>
    </div>
    
}
export default Home