import React, { useCallback, useState } from 'react'

import { GoFileBinary } from 'react-icons/go'
import { TiSortNumerically } from 'react-icons/ti'

import { Container, Title, Error } from './styles'

import Input from '../../components/Input'

const Main: React.FC = () => {
  const [decimal, setDecimal] = useState('')
  const [binary, setBinary] = useState('')
  const [hasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleDecimalInputChange = useCallback((event) => {
    let decimalValue = event.target.value

    setErrorMessage('')
    setDecimal(decimalValue)

    const binaryArray = []

    while (decimalValue >= 1) {
      binaryArray.push(decimalValue % 2)
      decimalValue = Math.floor(decimalValue / 2)
    }

    const binaryValue = binaryArray.reverse().join('')

    setBinary(binaryValue)
  }, [])

  const handleBinaryInputChange = useCallback((event) => {
    const binaryValue = event.target.value

    if (binaryValue.match(/^[0-1]+$/g) === null) {
      setErrorMessage('Permitido somente valores 0 ou 1')
      return
    }

    setErrorMessage('')
    setBinary(binaryValue)

    let decimalValue = 0
    let aux = binaryValue.length - 1

    for (let i = 0; i < binaryValue.length; i += 1) {
      const pow = 2 ** i
      const result = binaryValue[aux] * pow
      aux -= 1
      decimalValue += result
    }

    binaryValue ? setDecimal(decimalValue.toString()) : setDecimal('')
  }, [])

  return (
    <Container>
      <Title>Binary to Decimal</Title>

      <Input
        onChange={(event) => handleDecimalInputChange(event)}
        placeholder="Valor em decimal"
        type="Number"
        icon={TiSortNumerically}
        hasError={hasError}
        value={decimal}
      />
      <Input
        onChange={(event) => handleBinaryInputChange(event)}
        placeholder="Valor dem binário"
        type="Number"
        icon={GoFileBinary}
        hasError={hasError}
        value={binary}
      />

      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  )
}

export default Main
