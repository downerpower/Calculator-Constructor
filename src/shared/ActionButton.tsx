import React from 'react'

interface Props {
  operatorType: string
  isExtended: boolean
}

const ActionButton = ({ operatorType, isExtended }: Props): JSX.Element => {
  return (
    <button className={`flex-auto text-center font-medium rounded-md border border-light-gray p-2 ${isExtended ? 'col-span-2' : ''}`}>{operatorType}</button>
  )
}

export default ActionButton
