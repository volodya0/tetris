export interface cords {
  y : number
  x : number
  value? : boolean
}

export interface field {
  isFill : boolean
  color? : string
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
  // element : element
  setBlocks : (arr:cords[], color:string) => void 
  isFreeBlocks : (arr:cords[]) => void 
  onLose : () => void 
  active : boolean  
}

  
