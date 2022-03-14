import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Form
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SButton } from '../components/SButton'

export function AddToken() {
  const [token, setToken] = useState('')
  const [balance, setBalance] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleSubmit(a: any) {
    console.log('submitted')
    console.log(a)
  }

  // const handleInputChange = e => setTokens(e.target.value)

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
          text="Voltar"
          onClick={handleBack}
          bg="button.cancel"
        />
      </Flex>

      <Flex justify="center" direction="column">
        <Flex direction="column" mt="40px">
          <Form onSubmit={handleSubmit}>
            <FormLabel color="text.primary">Token</FormLabel>
            <Input
              id="token"
              bg="white"
              value={token}
              onChange={e => setToken(e.target.value)}
            />

            <FormLabel color="text.primary" mt="20px">
              Balance
            </FormLabel>
            <Input
              id="balance"
              bg="white"
              value={balance}
              onChange={e => setBalance(e.target.value)}
            />
            <Flex justify="end" mt="30px">
              <SButton
                bg="button.confirm"
                text="Save"
                type="submit"
                color="text.primary"
              />
            </Flex>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  )
}
