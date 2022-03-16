import { useState } from 'react'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useToast
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { SButton } from '@/components/SButton'

interface Token {
  name: string
  balance: string
}

type FormData = Token

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Token is required')
    .min(2, 'min 2 characteres')
    .max(4, 'max 4 characteres or less'),

  balance: Yup.number()
    .required('balance is required')
    .typeError('balance must be a number')
})

export function AddToken() {
  const response = localStorage.getItem('@wishwallet:tokens')
  const wallet = response ? JSON.parse(response) : []

  const toast = useToast()

  const [myTokens, setMyTokens] = useState(wallet as Token[])

  const wishWalletStorageKey = '@wishwallet:tokens'

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  function onSubmit(data: FormData) {
    const tokenAlreadyAdded = myTokens.find(({ name }) => name === data.name)

    if (!tokenAlreadyAdded) {
      const newToken = { ...data }
      setMyTokens([...myTokens, newToken])

      localStorage.setItem(
        wishWalletStorageKey,
        JSON.stringify([...myTokens, newToken])
      )

      toast({
        title: 'Token added',
        position: 'top',
        description: 'The token has been added to your wallet',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
      reset()
      navigate(-1)
    } else {
      toast({
        title: 'Token already exists',
        position: 'top',
        description: 'The token already exists in your wallet',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel color="text.primary">Token</FormLabel>
              <Input id="name" {...register('name')} bg="white" />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.balance}>
              <FormLabel color="text.primary" mt="20px">
                Balance
              </FormLabel>
              <Input id="balance" {...register('balance')} bg="white" />
              <FormErrorMessage>
                {errors.balance && errors.balance.message}
              </FormErrorMessage>
            </FormControl>

            <Flex justify="end" mt="30px">
              <SButton
                bg="button.confirm"
                text="Save"
                type="submit"
                color="text.primary"
              />
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
  )
}
