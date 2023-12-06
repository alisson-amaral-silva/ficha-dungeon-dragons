import * as React from 'react'
import { Input } from '@mui/base/Input'

interface InputElementProps {
  className?: string
  type?: string
  placeholder: string
}

export default function InputElement({
  className,
  placeholder,
  type = 'text'
}: InputElementProps) {

  return (
    <Input
      slotProps={{
        input: {
          className:
            `${className} bg-blue-900`,
        },
      }}
      type={type}
      placeholder={placeholder}
    />
  )
}
