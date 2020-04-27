import React, { useCallback, useState } from 'react'

import { GoFileBinary } from 'react-icons/go'
import { TiSortNumerically } from 'react-icons/ti'

import { Container } from './styles'

import Input from '../../components/Input'

const Main: React.FC = () => {
  const [decimal, setDecimal] = useState('')
  const [hasError, setHasError] = useState(false)
  const handleDecimalInputChange = useCallback((event) => {
    setDecimal(event.target.value)
  }, [])

  return (
    <Container>
      <Input
        onChange={(event) => handleDecimalInputChange(event)}
        placeholder="Valor Decimal"
        name="decimal"
        icon={TiSortNumerically}
        hasError={hasError}
        value={decimal}
      />
      <Input name="binary" icon={GoFileBinary} hasError={hasError} />
    </Container>
  )
}

export default Main
