import React from 'react'
import useItemsDrag from '../../hooks/useItemsDrag'
import { ItemTypes } from '../../shared/types'
// type Props = {}

const Display = (): JSX.Element => {
  const { isDragging, drag } = useItemsDrag(ItemTypes.Display)

  return (
    <div className={'rounded border-4 border-white shadow boxShadow'} ref={drag}>
      <div className="px-2 py-2 bg-gray border-1 border-gray rounded text-4xl font-extrabold text-right">
        0
      </div>
    </div>
  )
}

export default Display
