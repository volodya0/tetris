import { cords } from "./types"

export const random = (max : number) : number => Math.floor(Math.random() * max)

export const getProperties = (element : cords[]): {width : number, height : number} => {
  return {
    width : element.reduce((setX, obj) => setX.add(obj.x), new Set()).size,
    height : element.reduce((setY, obj) => setY.add(obj.y), new Set()).size,
  }
}

export const getCurrentCords = (y : number, x : number, element : cords[]) : cords[] => {
  return element
    .map((obj : cords):cords => { return { y : y - obj.y,  x : x + obj.x}})
    .filter((obj : cords):boolean => obj.y >= 0 && obj.x >= 0)
}

export const cordsToArray = (cords : cords[]): boolean[][] => {
  const {width, height} = getProperties(cords)
  const size = Math.max(width, height)
  const fields = new Array(size).fill(null).map(() =>new Array(size).fill(null).map(() => false))
  cords.forEach(obj => fields[obj.y][obj.x] = true)
  return fields.reverse()
}

const rotateArray = (arr : boolean[][]): boolean[][] => {
  arr = arr.map(row => row.reverse())
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < row; column++) {
      let temp = arr[row][column]
      arr[row][column] = arr[column][row]
      arr[column][row] = temp
    }
  }
  arr.filter(row => !row.every(e => e === false))
  return arr;
}

export const rotateCords = (cords : cords[]) => {

  const {width} = getProperties(cords)

  if(width === 4){
    return [{y:0, x:0}, {y:1,x:0}, {y:2,x:0}, {y:3,x:0}]
  }

  let arr = cordsToArray(cords)
  let rotatedArr = rotateArray(arr)

  let rotatedCords : cords[] = []
  rotatedArr.reverse()
    .forEach((row, y) => row.forEach((field, x) => field? rotatedCords.push({y, x}) : undefined))

  let x_arr : number[] = [], y_arr : number[] = []

  rotatedCords.forEach(obj => {
    x_arr.push(obj.x)
    y_arr.push(obj.y)
  })

  if(x_arr.every(x => x > 0))
    rotatedCords.forEach(obj => obj.x = obj.x - 1)
  
  if(y_arr.every(y => y > 0))
    rotatedCords.forEach(obj => obj.y = obj.y - 1)
  
  return rotatedCords
}