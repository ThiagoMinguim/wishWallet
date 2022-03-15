import { MyWalletList } from '@/components/MyWalletList'
import { Flex, Text } from '@chakra-ui/react'

export function Home() {
  return (
    <>
      <Flex w="500px" mx="auto" h="auto" mt="30" mb="5">
        <Flex justify="space-between" w="100%">
          <Flex>
            <Text color="text.primary">Tokens</Text>
          </Flex>

          <Text color="text.primary">Balance</Text>
        </Flex>
      </Flex>
      <MyWalletList />
    </>
  )
}
