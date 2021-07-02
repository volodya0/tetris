/* eslint-disable default-case */
import { CreateElement } from "./createElement"
import React, {useEffect, useState } from "react"
import uniqid from 'uniqid'
import { field, cords, configuration } from './types' 
import { Sidebar } from "./sidebar"

const configInit : configuration = {
  rows : 15,
  columns : 10,
  size : 40,
  interval : 18,
  step : 2,
  blocks : new Set(['Cube', 'Line', 'T', 'L', 'Z', 'U'])
}

export const GamePlay = () => {

  const [config, setConfig] = useState(configInit)

  const initial : field[][] = new Array(config.rows).fill(null).map(r =>new Array(config.columns).fill(null).map(() => {return{isFill:false}}))
  
  const [state, setState] = useState<field[][]>(initial)
  const [active, setActive] = useState<boolean>(false)
  const [score, setScore]= useState<number>(0)

  const selectBlocksHandler = (e : React.ChangeEvent<HTMLInputElement>): void => {
    if(!e) return
    setConfig(conf => {
      if(e.target.checked)
        conf.blocks.add(e.target.name)
      else
        conf.blocks.delete(e.target.name)

      return {...conf}
    })
  }

  const selectSpeedHandler = (e : React.ChangeEvent<HTMLInputElement>) : void => {
    let interval : number = 0
    let step : number = 0
    switch (e.target.value) {
      case "1":
        step = 1
        interval = 16
        break;
      case "2":
        step = 1
        interval = 12
        break;
      case "3":
        step = 2
        interval = 18
        break;
      case "4":
        step = 2
        interval = 14
      break;
      case "5":
        step = 2
        interval = 10
      break;
    }
    setConfig({...config, step, interval})
  }

  const reset = () : void => {
    setActive(false)
    setState(initial)
    setScore(0)
  }
  
  const onLose = () : void => {
    setActive(false)
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

  function isFreeBlocks(arr : cords[]): boolean{
    if(arr.every(({y, x}) => state[y][x].isFill === false)){
      return true
    }else{
      return false
    }
  }

  return <div className='container'>
  <div className="game-container b" id = 'game-container'>
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
    <Score count={score} />
  </div>
   <Sidebar 
    active={active} 
    selectSpeedHandler={selectSpeedHandler} 
    selectBlocksHandler={selectSpeedHandler}/>
  </div>
}

const Score : React.FC<{count : number}> = ({count}) =>{
  useEffect(() => {
    let block : HTMLSpanElement | null = document.querySelector('.score')
    if(block)
    block.style.backgroundColor = 'gold'

    setTimeout(() => {
      if(block)
      block.style.backgroundColor = 'transparent'
    }, 1000)

  }, [count])
  return <span className='score'>Score {count}</span>
}

const Row : React.FC<{row : field[]}> = ({row}) => <div className='g-row'>
    {row.map(field => <Field field={field} key={uniqid()}/>)}
  </div>

const Field :  React.FC<{field : field}> = ({field}) =>  <div 
    className={field.isFill? 'field fill ' + field.color : 'field empty'}>
  </div>

