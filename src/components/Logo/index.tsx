import { Flex, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import logoImg from '@/assets/logo.svg'

export function Logo() {
  const navigate = useNavigate()

  function handleBack() {
    navigate('/')
  }

  return (
    <Flex justify="center" mt="30px">
      <Image
        w={['100', '200px']}
        src={logoImg}
        alt="klever logo"
        onClick={handleBack}
        cursor="pointer"
      />
    </Flex>
  )
}
