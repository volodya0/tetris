/* eslint-disable default-case */
import { useEffect } from "react"
import { cords, componentProps } from './types' 

const random = (max : number) : number => Math.floor(Math.random() * max)

export const CreateElement : React.FC<componentProps> = ({config , element, setBlocks, isFreeBlocks, onLose, active}) => {
  
  useEffect(() => {
    let block : HTMLDivElement | null = document.querySelector('.animate')

    let offsetLeft : number =  random(config.columns - element.width)
    let offsetTop : number = -1
    let offsetTopPx = 0
    let count = 0

    if(block)
      block.style.left = offsetLeft * config.size +'px'
    else return

    if(!active){
      block.style.top = -40 + 'px'
      return
    }

    const getCurrentFields = (y : number = offsetTop, x : number = offsetLeft, arr : cords[] = element.squares) : cords[] => {
      return arr
        .map((obj : cords):cords => { return { y : y - obj.y,  x : x + obj.x}})
        .filter((obj : cords):boolean => obj.y >= 0 && obj.x >= 0)
    }

    const keyboardHandler = (e : KeyboardEvent) : void => {
    if(offsetTop > 0)
      switch (e.key) {
        case 'ArrowLeft':
          if(offsetLeft > 0 && isFreeBlocks(getCurrentFields(offsetTop, offsetLeft - 1)))
            offsetLeft -= 1
        break;
        case 'ArrowRight':
          if(offsetLeft + element.width < config.columns && isFreeBlocks(getCurrentFields(offsetTop, offsetLeft + 1)))
            offsetLeft += 1
        break;
      }
    }
      
    const onInterval = (block : HTMLDivElement) => {
      offsetTopPx += config.step
      count++
      if(count + 1 === config.size / config.step){
        if(offsetTop < config.rows - 1 && isFreeBlocks(getCurrentFields(offsetTop+1))){
          offsetTop += 1
        }else{
          if(offsetTop < element.height) onLose()
          offsetTopPx = 0
          setBlocks(getCurrentFields())  
        }
        count = 0
      }
      block.style.left = offsetLeft * config.size + 'px'
      block.style.top =  offsetTopPx  + 'px'
    }

    let interval = setInterval(onInterval.bind(null, block), config.interval)
    window.addEventListener('keydown', keyboardHandler)  

    return () => {
      window.removeEventListener('keydown', keyboardHandler)
      interval && clearInterval(interval)
    }
  }, [setBlocks, isFreeBlocks, element, active, config.columns, config.size, config.interval, config.rows, config.step, onLose])
  
  return <>
    <div className='animate'><element.Component/></div>
  </>
}

