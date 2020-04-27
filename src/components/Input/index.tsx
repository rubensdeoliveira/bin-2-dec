import React, { InputHTMLAttributes, useState, useCallback } from 'react'
import { IconBaseProps } from 'react-icons'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>
  hasError: boolean
}

const Input: React.FC<InputProps> = ({ hasError, icon: Icon, ...rest }) => {
  // const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <Container isErrored={hasError} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        // ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

export default Input
