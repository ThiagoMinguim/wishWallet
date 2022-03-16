import { Flex, Link, Text } from '@chakra-ui/react'
import { FaEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export function MyWalletList() {
  const navigate = useNavigate()

  const token = localStorage.getItem('@wishwallet:tokens')
  const wallet = token ? JSON.parse(token) : []

  function handleGoEdit(e: any) {
    navigate(`/edit-token/${e}`)
  }

  const numberFormatted = (value: string) => {
    return Intl.NumberFormat('en-US').format(+value)
  }

  return (
    <>
      {wallet.map((tokens: any) => (
        <Flex
          w="500px"
          mx="auto"
          h="auto"
          alignItems="center"
          key={tokens.token}>
          <Link
            as={FaEdit}
            onClick={() => {
              handleGoEdit(tokens.token)
            }}
            color="text.primary"
            h="1rem"
            w="1rem"
            cursor="pointer"
            mr="2"
          />
          <Flex justify="space-between" w="100%">
            <Flex alignItems={'center'} gap="2">
              <Text color="text.primary" fontWeight="bold" fontSize="3xl">
                {tokens.token}
              </Text>
            </Flex>

            <Text color="text.primary" fontWeight="bold" fontSize="3xl">
              {numberFormatted(tokens.balance)}
            </Text>
          </Flex>
        </Flex>
      ))}
    </>
  )
}
