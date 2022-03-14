import { Flex, Image } from '@chakra-ui/react'
import logoImg from '../../assets/logo.svg'

export function Logo() {
  return (
    <Flex justify="center" mt="30px">
      <Image w={['100', '200px']} src={logoImg} alt="klever logo" />
    </Flex>
  )
}
