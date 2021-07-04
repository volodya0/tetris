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
  blocks : Set<string>
}

export interface componentProps {
  config: configuration
  // element : element
  setBlocks : (arr:cords[], color:string) => void 
  isFreeBlocks : (arr:cords[]) =>  boolean 
  onLose : () => void 
  active : boolean  
}


export interface sidebarProps {
  active : boolean
  selectSpeedHandler : (e : React.ChangeEvent<HTMLInputElement>) => void
  selectBlocksHandler : (e : React.ChangeEvent<HTMLInputElement>) => void
}

  
