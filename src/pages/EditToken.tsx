import { useEffect, useState } from 'react'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Flex,
  FormControl,
  Text,
  FormLabel,
  Input,
  FormErrorMessage,
  useDisclosure,
  Button,
  useToast
} from '@chakra-ui/react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'

import { SButton } from '@/components/SButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

interface Token {
  token: string
  balance: string
}

type FormData = Token

const schema = Yup.object().shape({
  token: Yup.string()
    .required('Token is required')
    .min(2, 'min 2 characteres')
    .max(4, 'max 4 characteres or less'),

  balance: Yup.number()
    .required('balance is required')
    .typeError('balance must be a number')
})

export function EditToken() {
  const wishWalletStorageKey = '@wishwallet:tokens'

  const tokens = localStorage.getItem('@wishwallet:tokens')
  const wallet = tokens ? JSON.parse(tokens) : []

  const [token, setToken] = useState({} as Token)
  const [myTokens, setMyTokens] = useState(wallet as Token[])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const toast = useToast()

  const { pathname } = useLocation()

  function handleBack() {
    navigate(-1)
  }

  const getToken = async (tokenName: string) => {
    const targetToken = wallet.find((item: any) => item.token === tokenName)

    setToken(targetToken)
  }

  function removeToken(tokenName: string) {
    const newWallet = wallet.filter((item: Token) => item.token !== tokenName)

    localStorage.setItem(wishWalletStorageKey, JSON.stringify(newWallet))

    toast({
      title: 'Token Remove',
      position: 'top',
      description: 'The token has been remove to your wallet',
      status: 'success',
      duration: 5000,
      isClosable: true
    })

    navigate(-1)
  }

  function attToken(data: FormData) {
    const attToken: Token = wallet.find(
      (tks: Token) => tks.token === pathname.split('/')[2]
    )

    const tokens = JSON.parse(localStorage.getItem(wishWalletStorageKey)!)

    const updatedTokens = tokens.map((tk: Token) =>
      tk.token === attToken.token ? data : tk
    )

    if (attToken) {
      setMyTokens(updatedTokens)

      localStorage.setItem(wishWalletStorageKey, JSON.stringify(updatedTokens))

      toast({
        title: 'Token Change Sucess',
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

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  useEffect(() => {
    const targetToken = pathname.split('/')[2]

    getToken(targetToken)
  }, [])

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are you sure you want to delete this token? This action cannot be
              undone.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                removeToken(token.token)
              }}>
              Remove Token
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
            <form onSubmit={handleSubmit(attToken)}>
              
              <FormControl isInvalid={!!errors.token}>
                <FormLabel color="text.primary">Token</FormLabel>
                <Input
                  id="token"
                  bg="white"
                  placeContent={'aaaaaa'}
                  {...register('token')}
                  defaultValue={token.token}
                />
                <FormErrorMessage>
                  {errors.token && errors.token.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.balance}>
                <FormLabel color="text.primary" mt="20px">
                  Balance
                </FormLabel>
                <Input
                  id="balance"
                  bg="white"
                  {...register('balance')}
                  defaultValue={token.balance}
                />
                <FormErrorMessage>
                  {errors.balance && errors.balance.message}
                </FormErrorMessage>
              </FormControl>

              <Flex justify="space-between" mt="30">
                <Flex>
                  <SButton
                    bg="button.remove"
                    text="Remove"
                    color="text.primary"
                    width="150px"
                    onClick={onOpen}
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
            </form>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
