export enum SwitchButtonsText {
  Runtime = 'Runtime',
  Constructor = 'Constructor'
}

export enum SwitchButtonsIcons {
  RuntimeIconActive = './img/eye.svg',
  RuntimeIconInactive = './img/eye-inactive.svg',
  ConstructorIconActive = './img/selector.svg',
  ConstructorIconInactive = './img/selector-inactive.svg'
}

export enum DragType {
  type = 'constructor'
}

export enum ItemTypes {
  Display = 'display',
  OperatorsBoard = 'operators board',
  NumbersBoard = 'numbers board',
  EqualBoard = 'equal board',
  Dropboard = 'drop board'
}

export interface DragTypes {
  isDragging: boolean
  drag: any
}

export interface DropTypes {
  canDrop: boolean
  drop: any
}
