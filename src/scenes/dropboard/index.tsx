import React from 'react'
import useItemsDrop from '../../hooks/useItemsDrop'
import { ItemTypes } from '../../shared/types'

// type Props = {}

const Dropboard = (): JSX.Element => {
  const { canDrop, drop } = useItemsDrop(ItemTypes.Dropboard)

  return (
        <div
          className={`p-2 flex flex-col justify-center items-center w-60 h-full rounded-md border-2 border-dashed border-stroke ${canDrop ? 'bg-light-blue' : ''}`}
          ref={drop}
        >
          <div>
            <img src="./img/add.svg" alt="add" className="mb-3" />
          </div>
          <h3 className="mb-1 text-blue text-sm font-medium">
            Перетащите сюда
          </h3>
          <p className="text-dark-gray text-xs leading-4">
            любой элемент <br />
            из левой панели
          </p>
        </div>
  )
}

export default Dropboard
