import { Flex, Button,Image,Stack } from '@chakra-ui/react'

function Footer(){
    return <div style={{marginTop:"50px"}}>
        <Flex justifyContent="space-around">
            <div>
                <h1>Sign up to our email list and receive 20% off your next order</h1>
                <Button bg="black" marginTop={15} color="white">Sign Up</Button>
            </div>
            <div>
      <h1>Connect with us</h1>
 <Stack direction='row'>
  <Image
    boxSize='50px'
    objectFit='cover'
    src='https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png'
    alt='Dan Abramov'
  />
  <Image
    boxSize='50px'
    objectFit='cover'
    src='https://img.freepik.com/premium-vector/instagram-vector-social-media-icon-instagram-logo-illustration_153454-525.jpg?w=2000'
    alt='Dan Abramov'
  />
  <Image boxSize='50px'
   src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png' 
  alt='Dan Abramov' />
</Stack>
              
            </div>
</Flex>
<img src="footer.png" style={{border:"1px solid black",width:"100%",marginTop:"15px",height:"430px"}} alt="eror" />
</div>
}
export default Footer