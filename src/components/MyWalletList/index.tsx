import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import { FaEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export function MyWalletList() {
  const navigate = useNavigate()

  const response = localStorage.getItem('@wishwallet:tokens')
  const wallet = response ? JSON.parse(response) : []

  function handleGoEdit() {
    navigate('/edittoken')
  }

  return (
    <>
      {wallet.map((item: any) => (
        <Flex w="500px" mx="auto" h="auto" alignItems="center">
          <Link
            as={FaEdit}
            onClick={handleGoEdit}
            color="text.primary"
            h="1rem"
            w="1rem"
            cursor="pointer"
            mr="2"
          />
          <Flex justify="space-between" w="100%">
            <Flex alignItems={'center'} gap="2">
              <Text color="text.primary" fontWeight="bold" fontSize="3xl">
                {item.token}
              </Text>
            </Flex>

            <Text color="text.primary" fontWeight="bold" fontSize="3xl">
              {item.balance}
            </Text>
          </Flex>
        </Flex>
      ))}
    </>
  )
}
