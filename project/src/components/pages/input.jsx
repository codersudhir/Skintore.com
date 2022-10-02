import { Input,InputRightElement, InputGroup,Button} from '@chakra-ui/react'
function Inputbar(){
    return  <InputGroup size='md'>
    <Input
      pr='4.5rem'
      type='text'
      placeholder='Enter password'
    />
    <InputRightElement width='4.5rem'>
      <Button h='1.75rem' size='sm'>
        
      </Button>
    </InputRightElement>
  </InputGroup>
}
export default Inputbar