import { cords } from './types' 

const random = (max : number): number => Math.floor(Math.random() * max)

export function getElement(type? : string) : cords[]{
  let types : string[] = Object.keys(elements)
  if(type && types.includes(type)) 
    return elements[type]
  else
    return elements[types[random(types.length)]]
}

export function getColor() : string{
  return colors[random(Object.values(colors).length)]
}

const elements : {[key : string] : cords[] } = {
  Cube : [{y:0,x:0}, {y:1,x:0}, {y:1,x:1}, {y:0,x:1}],
  Line : [{y:0,x:0}, {y:0,x:1}, {y:0,x:2}, {y:0,x:3}],
  T :    [{y:0,x:0}, {y:0,x:1}, {y:0,x:2}, {y:1,x:1}],
  L :    [{y:0,x:0}, {y:1,x:0}, {y:1,x:1}, {y:1,x:2}],
  Z :    [{y:0,x:0}, {y:0,x:1}, {y:1,x:1}, {y:1,x:2}]
}

const colors : {[key : number] : string}= {
  0 : 'green',
  1 : 'blue',
  2 : 'yellow',
  3 : 'red'
}

