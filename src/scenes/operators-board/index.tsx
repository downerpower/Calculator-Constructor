import React from 'react'
import ActionButton from '../../shared/ActionButton'
import useItemsDrag from '../../hooks/useItemsDrag'
import { ItemTypes } from '../../shared/types'
// type Props = {}

const OperatorsBoard = (): JSX.Element => {
  const OPERATORS: string[] = ['/', 'x', '-', '+']
  const { isDragging, drag } = useItemsDrag(ItemTypes.OperatorsBoard)

  return (
    <div className="flex gap-2 bg-white rounded border-4 border-white shadow boxShadow" ref={drag}>
      {OPERATORS.map((operator, i) => (
        <ActionButton key={i} operatorType={operator} isExtended={false} />
      ))}
    </div>
  )
}

export default OperatorsBoard
