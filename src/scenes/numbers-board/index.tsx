import React from 'react'
import ActionButton from '../../shared/ActionButton'
import useItemsDrag from '../../hooks/useItemsDrag'
import { ItemTypes } from '../../shared/types'
// type Props = {}

const NumbersBoard = (): JSX.Element => {
  const NUMBERS: string[] = [
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '0',
    ','
  ]

  const { isDragging, drag } = useItemsDrag(ItemTypes.NumbersBoard)

  return (
    <div className="grid grid-cols-grid gap-2 bg-white rounded border-4 border-white shadow boxShadow" ref={drag}>
      {NUMBERS.map((operator, i) => (
        <ActionButton
          key={i}
          operatorType={operator}
          isExtended={operator === '0' && true}
        />
      ))}
    </div>
  )
}

export default NumbersBoard
