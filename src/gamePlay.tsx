/* eslint-disable default-case */
import { CreateElement } from "./createElement"
import React, {useState } from "react"
import uniqid from 'uniqid'
import { field, cords, configuration } from './types' 

const config : configuration = {
  rows : 15,
  columns : 10,
  size : 40,
  interval : 10,
  step : 2,
}

export const GamePlay = () => {

  const initial : field[][] = new Array(config.rows).fill(null).map(r =>new Array(config.columns).fill(null).map(() => {return{isFill:false}}))

  const [state, setState] = useState<field[][]>(initial)
  const [active, setActive] = useState<boolean>(false)
  const [score, setScore]= useState<number>(0)

  const reset = () : void => {
    setActive(false)
    setState(initial)
    setScore(0)
  }
  
  const onLose = () : void => {
    alert('you score : '+ score)
    reset()
  }

  const setBlocks = (arr : cords[], color : string) : void => {
    let removed = 0
    setState(previous => {

      arr.forEach(({y, x}) => previous[y][x] = {isFill:true, color})
      previous = previous.filter((row) => !row.every(e => e.isFill))

      while(previous.length < config.rows){
        previous.unshift(new Array(config.columns).fill(null).map(() => { 
          return {isFill:false }
        }))
        removed++
      }

      return [...previous]
    })
    setScore(p => p + removed)
  }

  const isFreeBlocks = (arr : cords[]): boolean => {
    return arr.every(({y, x}) => state[y][x].isFill === false)
  }

  return <div className="game-container b" id = 'game-container'>
    <div className='spawn-element b'>
      <CreateElement  
        config={config} 
        setBlocks={setBlocks} 
        isFreeBlocks={isFreeBlocks}
        onLose={onLose}
        active={active}
      />
    </div>
    <div>{state.map(row => <Row row={row} key={uniqid()}/>)}</div>
    <button onClick={() => setActive(true)}>Start</button>
    <button onClick={reset}>Reset</button>
    <span className='score'>Score {score}</span>
  </div>
}

const Row : React.FC<{row : field[]}> = ({row}) => <div className='g-row'>
    {row.map(field => <Field field={field} key={uniqid()}/>)}
  </div>

const Field :  React.FC<{field : field}> = ({field}) => <div 
    className={field.isFill? 'field fill ' + field.color : 'field empty'}>
  </div>

