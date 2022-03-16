import { Button } from '@chakra-ui/react'

type ButtonType = 'submit' | 'reset' | 'button'

interface ButtonProps {
  onClick?: () => void
  text: string
  type?: ButtonType
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
