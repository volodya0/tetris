import React from "react"
import { element } from './types' 

const random = (max : number): number => Math.floor(Math.random() * max)

export function getElement(type? : string) : element{
  let types : string[] = Object.keys(elements)
  if(type && types.includes(type)) 
    return elements[type]
  else
    return elements[types[random(types.length)]]
}

const elements : {[key : string] : element } = {
  Cube : {
    width : 2,
    height : 2,
    squares : [{y:0,x:0}, {y:1,x:0}, {y:1,x:1}, {y:0,x:1}],
    Component : () => <>
        <div className='r'><Square/><Square/></div>
        <div className='r'><Square/><Square/></div>
      </>
  },
  Line1 : {
    width : 4,
    height : 1,
    squares : [{y:0,x:0}, {y:0,x:1}, {y:0,x:2}, {y:0,x:3}],
    Component : () => <>
      <div className='r'><Square/><Square/><Square/><Square/></div>
    </>
  },
  Line2 : {
    width : 1,
    height : 4,
    squares : [{y:0,x:0}, {y:1,x:0}, {y:2,x:0}, {y:3,x:0}],
    Component : () => <>
      <div className='r'><Square/></div>
      <div className='r'><Square/></div>
      <div className='r'><Square/></div>
      <div className='r'><Square/></div>
    </>
  },
  T1 : {
    width : 3,
    height : 2,
    squares : [{y:0,x:0}, {y:0,x:1}, {y:0,x:2}, {y:1,x:1}],
    Component : () => <>
      <div className='r'><Offset/><Square/></div>
      <div className='r'><Square/><Square/><Square/></div>
    </>
  }, 
  T2:{   
    width : 3,
    height : 2,
    squares : [{y:1,x:0}, {y:1,x:1}, {y:1,x:2}, {y:0,x:1}],
    Component : () => <>
      <div className='r'><Square/><Square/><Square/></div>
      <div className='r'><Offset/><Square/></div>
    </>
  }, 
  L1 : {
    width : 3,
    height : 2,
    squares : [{y:0,x:0}, {y:1,x:0}, {y:1,x:1}, {y:1,x:2}],
    Component : () => <>
      <div className='r'><Square/><Square/><Square/></div>
      <div className='r'><Square/></div>
    </>
  },
  L2 : {
    width : 3,
    height : 2,
    squares : [{y:0,x:2}, {y:1,x:0}, {y:1,x:1}, {y:1,x:2}],
    Component : () => <>
      <div className='r'><Square/><Square/><Square/></div>
      <div className='r'><Offset/><Offset/><Square/></div>
    </>
  }
}

const Square = () => <div className='square' ></div>
const Offset = () => <div className='offset' ></div>

