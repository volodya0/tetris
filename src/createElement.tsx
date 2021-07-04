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
    let offsetLeftDelay : {position : number, offset : number} | null = null
    let offsetTop : number = 0
    let offsetTopPx : number = 0
    let count : number = 0
  

    block.style.left = offsetLeft * config.size +'px'
    
    setState({
      array : cordsToArray(element),
      color
    })

    const keyboardHandler = (e : KeyboardEvent) : void => {
      if(offsetTop > 0 && block){

        offsetLeftDelay = null
        switch (e.key) {

          case 'ArrowLeft':

            if(offsetLeft > 0)
              if(
                isFreeBlocks(getCurrentCords(offsetTop, offsetLeft - 1, element))&&
                isFreeBlocks(getCurrentCords(offsetTop - 1, offsetLeft - 1, element))
              ){
                offsetLeft -= 1
                block.style.left = offsetLeft * config.size + 'px'
              }else{
                offsetLeftDelay = {position : offsetTop, offset : offsetLeft - 1}
              }

          break;

          case 'ArrowRight':
            
            if(offsetLeft + getProperties(element).width < config.columns)
              if(
                isFreeBlocks(getCurrentCords(offsetTop, offsetLeft + 1, element))&&
                isFreeBlocks(getCurrentCords(offsetTop - 1, offsetLeft + 1, element))
              ){
                offsetLeft += 1
                block.style.left = offsetLeft * config.size + 'px'
              }else{
                offsetLeftDelay = {position : offsetTop, offset : offsetLeft + 1}
              }

        break;

          case 'ArrowUp':
            const rotatedElement : cords[] = rotateCords(element)
            if(
              (offsetLeft + getProperties(rotatedElement).width <= config.columns) && 
              isFreeBlocks(getCurrentCords(offsetTop, offsetLeft, rotatedElement)) &&
              isFreeBlocks(getCurrentCords(offsetTop-1, offsetLeft, rotatedElement))
            )
            element = rotatedElement
          break;

          case 'ArrowDown':
            offsetTopPx += config.step * 5
            count += 5
          break;
        
          case ' ' :
            while(offsetTop + 1 < config.rows && isFreeBlocks(getCurrentCords(offsetTop + 1, offsetLeft, element))){
              offsetTop += 1
              count = stepsOnSquare + 1
            }
          break
        }
      }
    }
    
    const onInterval = (): void => {
      if(!block) return
      offsetTopPx += config.step
      count++
      if(count > stepsOnSquare){

        if(
          offsetLeftDelay && 
          isFreeBlocks(getCurrentCords(offsetTop, offsetLeftDelay.offset, element))&&
          offsetTop - offsetLeftDelay.position < 3
        ){
          offsetLeft = offsetLeftDelay.offset
          block.style.left = offsetLeft * config.size + 'px'
        }

        if(offsetTop < config.rows - 1 && isFreeBlocks(getCurrentCords(offsetTop+1, offsetLeft, element))){
          offsetTop += 1
          offsetTopPx = offsetTop * config.size;
        }else{
          offsetTopPx = -200
          setBlocks(getCurrentCords(offsetTop, offsetLeft, element), color)  
          if(offsetTop < height) {
            onLose()
          }
        }
        count = 0 
      }
      block.style.top = offsetTopPx + 'px'
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
