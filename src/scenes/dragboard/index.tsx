import React from 'react'
// import useItemsDrag from '../../hooks/useItemsDrag'
// import { ItemTypes } from '../../shared/types'
import Display from '../display'
import EqualBoard from '../equal-board'
import NumbersBoard from '../numbers-board'
import OperatorsBoard from '../operators-board'

const Dragboard = (): JSX.Element => {
//   const { isDragging, drag } = useItemsDrag(ItemTypes.Display)

  return (
    <div className="flex flex-col gap-3 w-60">
      <div >
      <Display />
      </div>
      <div>
      <OperatorsBoard />
      </div>
      <div>
      <NumbersBoard />
      </div>
      <div>
      <EqualBoard />
      </div>
    </div>
  )
}

export default Dragboard
