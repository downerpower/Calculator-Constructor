import { useDrag } from 'react-dnd/dist/hooks'
import { DragType, type DragTypes } from '../shared/types'

const useItemsDrag = (item: string): DragTypes => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragType.type,
    item: { name: item },
    end: (item, monitor) => {
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return {
    isDragging,
    drag
  }
}

export default useItemsDrag
