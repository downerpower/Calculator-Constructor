import React from 'react'
import useItemsDrag from '../../hooks/useItemsDrag'
import { ItemTypes } from '../../shared/types'
// type Props = {}

const EqualBoard = (): JSX.Element => {
  const { isDragging, drag } = useItemsDrag(ItemTypes.EqualBoard)

  return (
    <div className="rounded border-4 border-white shadow boxShadow" ref={drag}>
      <div className="py-6 bg-blue text-white border-1 border-gray rounded text-center font-medium">
        =
      </div>
    </div>
  )
}

export default EqualBoard
