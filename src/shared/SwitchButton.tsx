import React from 'react'

interface Props {
  buttonText: string
  buttonIcon: string
  isActive: boolean
}

const SwitchButton = ({ buttonText, buttonIcon, isActive }: Props): JSX.Element => {
  return (
    <button className={`flex justify-center items-center gap-2 px-3 font-medium text-sm ${isActive ? 'bg-white py-2 border border-light-gray rounded' : ''}`}>
      <div>
        <img src={buttonIcon} alt={buttonText} />
      </div>
      {buttonText}
    </button>
  )
}

export default SwitchButton
