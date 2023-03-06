import React from 'react'

// type Props = {}

const Dropboard = (): JSX.Element => {
  return (
    <div className="p-2 flex flex-col justify-center items-center w-60 h-full rounded-md border-2 border-dashed border-stroke">
      <div>
        <img src="./img/add.svg" alt="add" className='mb-3' />
      </div>
      <h3 className="mb-1 text-blue text-sm font-medium">Перетащите сюда</h3>
      <p className="text-dark-gray text-xs leading-4">
        любой элемент <br />
        из левой панели
      </p>
    </div>
  )
}

export default Dropboard
