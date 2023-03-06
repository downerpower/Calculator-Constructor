import React from 'react'
import ActionButton from '../../shared/ActionButton'
// type Props = {}

const NumbersBoard = (): JSX.Element => {
  const NUMBERS: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ',']

  return (
    <div className='grid grid-cols-grid gap-2 rounded border-4 border-white shadow boxShadow'>
      {NUMBERS.map((operator, i) => <ActionButton key={i} operatorType={operator} isExtended={operator === '0' && true}/>)}
    </div>
  )
}

export default NumbersBoard
