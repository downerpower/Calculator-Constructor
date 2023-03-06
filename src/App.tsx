import React, { useState } from 'react'
import Display from './scenes/display'
import Dropboard from './scenes/dropboard'
import EqualBoard from './scenes/equal-board'
import NumbersBoard from './scenes/numbers-board'
import OperationBoard from './scenes/operators-board'
import SwitchButton from './shared/SwitchButton'
import { SwitchButtonsIcons, SwitchButtonsText } from './shared/types'

function App (): JSX.Element {
  const [switchActive, setSwitchActive] = useState(
    SwitchButtonsText.Constructor
  )

  return (
    <div className="app">
      <div className="my-9 flex justify-center items-center gap-14 h-3/4">
        <div
          className="flex flex-col gap-3 w-60"
          onClick={() => {
            setSwitchActive(SwitchButtonsText.Runtime)
          }}
        >
          <Display />
          <OperationBoard />
          <NumbersBoard />
          <EqualBoard />
        </div>
        <div className="flex flex-col gap-8 h-full">
          <div className="flex justify-center gap-1 p-px bg-gray rounded">
            <SwitchButton
              buttonText={SwitchButtonsText.Runtime}
              buttonIcon={
                switchActive === SwitchButtonsText.Runtime
                  ? SwitchButtonsIcons.RuntimeIconActive
                  : SwitchButtonsIcons.RuntimeIconInactive
              }
              isActive={switchActive === SwitchButtonsText.Runtime}
            />
            <SwitchButton
              buttonText={SwitchButtonsText.Constructor}
              buttonIcon={
                switchActive === SwitchButtonsText.Constructor
                  ? SwitchButtonsIcons.ConstructorIconActive
                  : SwitchButtonsIcons.ConstructorIconInactive
              }
              isActive={switchActive === SwitchButtonsText.Constructor}
            />
          </div>
          <Dropboard />
        </div>
      </div>
    </div>
  )
}

export default App
