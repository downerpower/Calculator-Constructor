import React from 'react'

interface Props {
  operatorType: string
  isExtended: boolean
}

const ActionButton = ({ operatorType, isExtended }: Props): JSX.Element => {
  return (
    <div className={`flex-auto text-center font-medium rounded-md border border-light-gray p-2 ${isExtended ? 'col-span-2' : ''}`}>{operatorType}</div>
  )
}

export default ActionButton
