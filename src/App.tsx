import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useSelector } from 'react-redux'
import Dragboard from './scenes/dragboard'
import Dropboard from './scenes/dropboard'
import SwitchButton from './shared/SwitchButton'
import { SwitchButtonsIcons, SwitchButtonsText } from './shared/types'

function App (): JSX.Element {
  const [switchActive, setSwitchActive] = useState(
    SwitchButtonsText.Constructor
  )
  const items = useSelector((state: string) => state)
  console.log(items)

  // const [droppedItems, setDroppedItems] = useState([])

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="app">
      <div className="my-9 flex justify-center items-center gap-14 h-3/4">
        <div
          onClick={() => {
            setSwitchActive(SwitchButtonsText.Runtime)
          }}
        >
          <Dragboard />
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
    </DndProvider>
  )
}

export default App
