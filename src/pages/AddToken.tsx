import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'

import { SButton } from '../components/SButton'

interface Token {
  token: string
  balance: string
}

type FormData = Token

export function AddToken() {
  const [token, setToken] = useState('')
  const [balance, setBalance] = useState('')
  const [myTokens, setMyTokens] = useState([] as Token[])

  const wishWalletStorageKey = '@wishwallet:tokens'

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm()

  function onSubmit(data: FormData) {
    setMyTokens([...myTokens, data])
    localStorage.setItem(
      wishWalletStorageKey,
      JSON.stringify([...myTokens, data])
    )
    setToken('')
    setBalance('')
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
          text="Voltar"
          onClick={handleBack}
          bg="button.cancel"
        />
      </Flex>

      <Flex justify="center" direction="column">
        <Flex direction="column" mt="40px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel color="text.primary">Token</FormLabel>
              <Input
                id="token"
                {...register('name', { required: true })}
                bg="white"
                value={token}
                onChange={e => setToken(e.target.value)}
              />

              <FormLabel color="text.primary" mt="20px">
                Balance
              </FormLabel>
              <Input
                id="balance"
                {...register('balance', { required: true })}
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
            </FormControl>
          </form>
        </Flex>
      </Flex>
    </Flex>
  )
}
