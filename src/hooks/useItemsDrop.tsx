import { useDrop } from 'react-dnd/dist/hooks'
import { DragType, type DropTypes } from '../shared/types'
import { addItemToDropBoard } from '../store/constructor-slice'
import { useAppDispatch } from '../store/hooks'

const useItemsDrop = (item: string): DropTypes => {
  const dispatch = useAppDispatch()

  const [{ canDrop }, drop] = useDrop(() => ({
    accept: DragType.type,
    drop: (item) => { addItemToBoard(item) },
    collect: (monitor) => ({
      // isOver: !!monitor.isOver()
      canDrop: !!monitor.canDrop()
    })
  }))

  const addItemToBoard = (item): void => {
    dispatch(addItemToDropBoard(item.name))
  }

  return {
    canDrop,
    drop
  }
}

export default useItemsDrop
