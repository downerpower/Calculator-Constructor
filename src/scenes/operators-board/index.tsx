import React from 'react'
import ActionButton from '../../shared/ActionButton'

// type Props = {}

const OperationBoard = (): JSX.Element => {
  const OPERATORS: string[] = ['/', 'x', '-', '+']

  return (
    <div className='flex gap-2 rounded border-4 border-white shadow boxShadow'>
      {OPERATORS.map((operator, i) => <ActionButton key={i} operatorType={operator} isExtended={false} />)}
    </div>
  )
}

export default OperationBoard
