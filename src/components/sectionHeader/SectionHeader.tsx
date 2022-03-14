import { Button, Flex, Text, Image } from '@chakra-ui/react'

import starFall from '../../assets/shooting-star.svg'
import { Sbutton } from '../button/Sbutton'

export function SectionHeader() {
  function handleGo() {
    console.log('clicked')
  }

  return (
    <Flex w="500px" mx="450" mt="50">
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
        <Sbutton
          bg="button.confirm"
          color="text.primary"
          text="Add Token"
          onClick={() => {}}
        />
      </Flex>
    </Flex>
  )
}
