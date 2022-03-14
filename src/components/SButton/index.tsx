import { Button } from '@chakra-ui/react'

type BtnType = 'submit' | 'reset' | 'button'

interface ButtonProps {
  onClick?: () => void
  text: string
  type?: BtnType
  bg: string
  color?: string
  width?: string
}

export function SButton({
  type,
  onClick,
  text,
  bg,
  color,
  width
}: ButtonProps) {
  return (
    <>
      <Button type={type} onClick={onClick} bg={bg} color={color} w={width}>
        {text}
      </Button>
    </>
  )
}
