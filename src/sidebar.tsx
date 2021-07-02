import { sidebarProps } from "./types"

export const Sidebar : React.FC<sidebarProps> =  ({active, selectSpeedHandler, selectBlocksHandler}) => {
  return  <div className='sidebar'>
    <div className='info'>
      <h5>Info</h5>
      <p>Arrow left/right : control</p>
      <p>Enter : flip</p>
      <p>Arrow down : speed</p>
      <p>Space : set now</p>
    </div>
    <div className='settings'>
      <h5>Settings</h5>
      <div className='speed-settings'>
        <div>Speed : </div>
        <input 
          type="radio"
          name="speed-set" 
          id="speed1" 
          value="1"
          disabled={active}
          onChange = {selectSpeedHandler}
        />
        <label htmlFor="speed1">1</label>
        <input 
          type="radio"
          name="speed-set" 
          id="speed2"
          value="2"
          disabled={active}
          onChange = {selectSpeedHandler}
        />
        <label htmlFor="speed2">2</label>
        <input 
          type="radio"
          name="speed-set" 
          id="speed3"
          value="3"
          defaultChecked
          disabled={active}
          onChange = {selectSpeedHandler}
        />
        <label htmlFor="speed3">3</label>
        <input 
          type="radio"
          name="speed-set" 
          id="speed4"
          value="4"
          disabled={active}
          onChange = {selectSpeedHandler}
        />
        <label htmlFor="speed4">4</label>
        <input 
          type="radio"
          name="speed-set" 
          id="speed5"
          value="5"
          disabled={active}
          onChange = {selectSpeedHandler}      />
        <label htmlFor="speed5">5</label>
      </div>

      <div className='blocks-settings'>

        <div>Blocks :</div> 

        <div>
          <input type="checkbox" id="cube" name="Cube" onChange={selectBlocksHandler} defaultChecked disabled = {active}/>
          <label htmlFor="cube">Cube</label>
        </div>

        <div>
          <input type="checkbox" id="line" name="Line" onChange={selectBlocksHandler} defaultChecked disabled = {active}/>
          <label htmlFor="line">Line</label>
        </div>

        <div>
          <input type="checkbox" id="t" name="T" onChange={selectBlocksHandler} defaultChecked disabled = {active}/>
          <label htmlFor="t">"T"</label>
        </div>

        <div>
          <input type="checkbox" id="l" name="L" onChange={selectBlocksHandler} defaultChecked disabled = {active}/>
          <label htmlFor="l">"L"</label>
        </div>

        <div>
          <input type="checkbox" id="l2" name="L2" onChange={selectBlocksHandler} defaultChecked disabled = {active}/>
          <label htmlFor="l2">"L" - 2</label>
        </div>

        <div>
          <input type="checkbox" id="z" name="Z" onChange={selectBlocksHandler} defaultChecked disabled = {active}/>
          <label htmlFor="z">"Z"</label>
        </div>

        <div>
          <input type="checkbox" id="z2" name="Z2" onChange={selectBlocksHandler} defaultChecked disabled = {active}/>
          <label htmlFor="z2">"Z" - 2</label>
        </div>

        <div>
          <input type="checkbox" id="u" name="U" onChange={selectBlocksHandler} defaultChecked disabled = {active}/>
          <label htmlFor="u">"U"</label>
        </div>

      </div>
    </div>

    <div className='Link'>GitHub - <a href="https://github.com/volodya0/tetris">https://github.com/volodya0/tetris</a></div>
  </div>
}