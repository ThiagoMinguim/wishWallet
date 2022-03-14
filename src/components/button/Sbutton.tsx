import { Button } from '@chakra-ui/react'

interface buttonProps {
  onClick: () => void
  text: string
  bg: string
  color?: string
  width?: string
}

export function Sbutton({ onClick, text, bg, color, width }: buttonProps) {
  return (
    <>
      <Button onClick={onClick} bg={bg} color={color} w={width}>
        {text}
      </Button>
    </>
  )
}
