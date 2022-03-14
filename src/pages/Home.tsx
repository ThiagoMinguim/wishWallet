import { Flex, Text } from '@chakra-ui/react'

export function Home() {
  return (
    <Flex w="500px" mx="450" h="500px" mt="50">
      <Flex justify="space-between" w="100%">
        <div>
          <Text color="text.primary">Tokens</Text>
        </div>
        <Text color="text.primary">Balance</Text>
      </Flex>
    </Flex>
  )
}
