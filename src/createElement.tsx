/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import { useEffect, useState } from "react"
import uniqid from 'uniqid'
import { getElement, getColor } from "./elements"
import { componentProps, cords } from './types' 
import { getCurrentCords, getProperties, random, rotateCords, cordsToArray} from './utils'

export const CreateElement : React.FC<componentProps> = ({config, setBlocks, isFreeBlocks, onLose, active}) => {

  const [state, setState] = useState<{array:boolean[][], color:string}>({array:[], color:''})
    
  useEffect(() => {
    let element : cords[] = getElement(config.blocks)
    let color : string = getColor()
    let block : HTMLDivElement | null = document.querySelector('.animate')
    
    if(!block) return

    if(!active || !element){
      block.style.top = -200 + 'px'
      return
    }

    let {width, height} = getProperties(element)
    let stepsOnSquare : number = config.size / config.step
    let offsetLeft : number =  random((config.columns - 1) - width) + 1
    let offSetTop : number = 0
    let offSetTopPx : number = 0
    let count : number = 0
  

    block.style.left = offsetLeft * config.size +'px'
    
    setState({
      array : cordsToArray(element),
      color
    })

    const keyboardHandler = (e : KeyboardEvent) : void => {
    if(offSetTop > 0)
      switch (e.key) {

        case 'ArrowLeft':
          if(
            offsetLeft > 0 && 
            isFreeBlocks(getCurrentCords(offSetTop, offsetLeft - 1, element))&&
            (count + 5 > stepsOnSquare || isFreeBlocks(getCurrentCords(offSetTop - 1, offsetLeft - 1, element)))
          )
            offsetLeft -= 1
        break;

        case 'ArrowRight':
          if(
            offsetLeft + getProperties(element).width < config.columns && 
            isFreeBlocks(getCurrentCords(offSetTop, offsetLeft + 1, element))&&
            (count + 5 > stepsOnSquare || isFreeBlocks(getCurrentCords(offSetTop - 1, offsetLeft + 1, element)))
          )
            offsetLeft += 1
        break;

        case 'ArrowUp':
          const rotatedElement : cords[] = rotateCords(element)
          if(
            (offsetLeft + getProperties(rotatedElement).width <= config.columns) && 
            isFreeBlocks(getCurrentCords(offSetTop, offsetLeft, rotatedElement)) &&
            isFreeBlocks(getCurrentCords(offSetTop-1, offsetLeft, rotatedElement))
          )
          element = rotatedElement
        break;

        case 'ArrowDown':
          offSetTopPx += config.step * 5
          count += 5
        break;
      
        case ' ' :
          while(offSetTop + 1 < config.rows && isFreeBlocks(getCurrentCords(offSetTop + 1, offsetLeft, element)))
            offSetTop += 1
        break
      }
    }
    
    const onInterval = (): void => {
      if(!block) return
      
      offSetTopPx += config.step
      count++
      if(count > stepsOnSquare){
        if(offSetTop < config.rows - 1 && isFreeBlocks(getCurrentCords(offSetTop+1, offsetLeft, element))){
          offSetTop += 1
          offSetTopPx = offSetTop * config.size;
        }else{
          offSetTopPx = -200
          setBlocks(getCurrentCords(offSetTop, offsetLeft, element), color)  
          if(offSetTop < height) {
            onLose()
          }
        }
        count = 0 
      }
      block.style.left = offsetLeft * config.size + 'px'
      block.style.top = offSetTopPx + 'px'
      setState({
        array: cordsToArray(element),
        color
      })
    }

    let interval = setInterval(onInterval, config.interval)
    window.addEventListener('keydown', keyboardHandler)  

    return () => {
      window.removeEventListener('keydown', keyboardHandler) 
      interval && clearInterval(interval)
    }

  }, [active, config, setBlocks])

  return <div className='animate'>
      <div>{state.array.map(row => <Row row={row} color={state.color} key={uniqid()}/>)}</div>
    </div>
}

const Row : React.FC<{row : boolean[], color:string }> = ({row, color}) => <div className='r'>{
  row.map(fill => fill? <Square key={uniqid()} color={color}/>: <Empty key={uniqid()}/>)
}</div>

const Square : React.FC<{color : string}> = ({color}) => <div className={'square ' +color} ></div>
const Empty = () => <div className='offset' ></div>
