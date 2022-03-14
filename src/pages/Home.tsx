import { Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export function Home() {
  return (
    <Flex w="500px" mx="auto" h="300px" mt="50">
      <Flex justify="space-between" w="100%">
        <Flex>
          <Text color="text.primary">Tokens</Text>
        </Flex>
        <Text color="text.primary">Balance</Text>
      </Flex>
    </Flex>
  )
}
