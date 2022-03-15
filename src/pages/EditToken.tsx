import {
  Flex,
  FormControl,
  Text,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react'

import { SButton } from '@/components/SButton'
import { useNavigate } from 'react-router-dom'

export function EditToken() {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Flex
      w="500px"
      mx="auto"
      h="auto"
      mt="50"
      direction="column"
      justify="center">
      <Flex justify="space-between" align={'start'} alignItems="center">
        <Flex>
          <Text color="text.primary" alignSelf="center">
            Add Token
          </Text>
        </Flex>
        <SButton
          color="text.primary"
          text="Back"
          onClick={handleBack}
          bg="button.cancel"
        />
      </Flex>

      <Flex justify="center" direction="column">
        <Flex direction="column" mt="40px">
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <FormControl>
            <FormLabel color="text.primary">Token</FormLabel>
            <Input id="token" bg="white" />
            {/* <FormErrorMessage>
              {errors.token && errors.token.message}
            </FormErrorMessage> */}
          </FormControl>

          <FormControl>
            <FormLabel color="text.primary" mt="20px">
              Balance
            </FormLabel>
            <Input id="balance" bg="white" />
            {/* <FormErrorMessage>
              {errors.balance && errors.balance.message}
            </FormErrorMessage> */}
          </FormControl>
          <Flex justify="space-between" mt="30">
            <Flex>
              <SButton
                bg="button.remove"
                text="remove"
                color="text.primary"
                width="150px"
              />
            </Flex>
            <SButton
              bg="button.confirm"
              text="Save"
              type="submit"
              color="text.primary"
              width="130px"
            />
          </Flex>

          {/* </form> */}
        </Flex>
      </Flex>
    </Flex>
  )
}
