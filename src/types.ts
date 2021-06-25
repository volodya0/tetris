export interface cords {
  y : number
  x : number
  value? : boolean
}

export interface field {
  isFill : boolean
  color? : string
}

export interface element {
  width : number,
  height : number,
  squares : cords[],
  Component : React.FC
}

export interface configuration {
  rows : number,
  columns : number,
  size : number,
  interval : number,
  step : number,
}

export interface componentProps {
  config: configuration
  element : element
  setBlocks : (arr:cords[]) => void 
  isFreeBlocks : (arr:cords[]) => void 
  onLose : () => void 
  active : boolean  
}

  
