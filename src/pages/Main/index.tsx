import React, { useCallback, useState, useRef } from 'react'

import { GoFileBinary } from 'react-icons/go'
import { TiSortNumerically, TiMediaFastForward } from 'react-icons/ti'

import { Container } from './styles'

import Input from '../../components/Input'

const Main: React.FC = () => {
  const [decimal, setDecimal] = useState('')
  const [binary, setBinary] = useState('')
  const [hasError] = useState(false)

  const handleDecimalInputChange = useCallback((event) => {
    let decimalValue = event.target.value

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

    setBinary(binaryValue)

    let decimalValue = 0
    let aux = binaryValue.length - 1

    for (let i = 0; i < binaryValue.length; i += 1) {
      const pow = 2 ** i
      const result = binaryValue[aux] * pow
      aux -= 1
      decimalValue += result
    }

    setDecimal(decimalValue.toString())
  }, [])

  return (
    <Container>
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
    </Container>
  )
}

export default Main
