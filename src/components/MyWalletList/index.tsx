import { Flex, Link, Text } from '@chakra-ui/react'
import { FaEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

interface Token {
  name: string
  balance: string
}

export function MyWalletList() {
  const wishWalletStorageKey = '@wishwallet:tokens'

  const navigate = useNavigate()

  const token = localStorage.getItem(wishWalletStorageKey)
  const wallet = token ? JSON.parse(token) : []

  function handleGoEdit(e: string) {
    navigate(`/edit-token/${e}`)
  }

  const numberFormatted = (value: string) => {
    return Intl.NumberFormat('en-US').format(+value)
  }

  return (
    <>
      {wallet.map((token: Token) => (
        <Flex w="500px" mx="auto" h="auto" alignItems="center" key={token.name}>
          <Link
            as={FaEdit}
            onClick={() => handleGoEdit(token.name)}
            color="text.primary"
            h="1rem"
            w="1rem"
            cursor="pointer"
            mr="2"
          />
          <Flex justify="space-between" w="100%">
            <Flex alignItems={'center'} gap="2">
              <Text color="text.primary" fontWeight="bold" fontSize="3xl">
                {token.name}
              </Text>
            </Flex>

            <Text color="text.primary" fontWeight="bold" fontSize="3xl">
              {numberFormatted(token.balance)}
            </Text>
          </Flex>
        </Flex>
      ))}
    </>
  )
}
