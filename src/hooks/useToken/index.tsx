import { useToast } from '@chakra-ui/react'
import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from 'react'

interface Token {
  token: string
  balance: string
}

type FormData = Token

const wishWalletStorageKey = '@wishwallet:tokens'

const response = localStorage.getItem('@wishwallet:tokens')
const wallet = response ? JSON.parse(response) : []

export function AddT(data: FormData) {
  const [myTokens, setMyTokens] = useState(wallet as Token[])

  const tokenAlreadyAdded = myTokens.find(({ token }) => token === data.token)
  if (!tokenAlreadyAdded) {
    setMyTokens([...myTokens, data])
    localStorage.setItem(
      wishWalletStorageKey,
      JSON.stringify([...myTokens, data])
    )
  }
}
