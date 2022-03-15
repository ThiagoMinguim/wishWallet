import { Flex, Text, Image } from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom'

import starFall from '@/assets/shooting-star.svg'
import { SButton } from '@/components/SButton'

export function SectionHeader() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  function handleAddNewToken() {
    navigate('/addtoken')
  }

  return (
    <Flex w="500px" mx="auto" mt="50" justify="center">
      <Flex justify="space-between" w="100%" align={'start'}>
        <Flex>
          <Image src={starFall} w={50} />

          <Text
            alignSelf="center"
            color="text.primary"
            fontSize="3xl"
            ml="20px">
            WishWallet
          </Text>
        </Flex>
        {pathname === '/' && (
          <SButton
            bg="button.confirm"
            color="text.primary"
            text="Add Token"
            onClick={handleAddNewToken}
          />
        )}
      </Flex>
    </Flex>
  )
}
