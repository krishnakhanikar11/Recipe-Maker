import "./ThemeSelector.css"
import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode-sun.svg'


const themeColors = ["#58249c",'#249c6b','#b70233']
export default function ThemeSelector() {

    const {changeColor,changeMode,mode } = useTheme()
     const toggleMode = () => {
       changeMode(mode === 'dark' ? 'light' : 'dark')
     }
    
    return (
      <div className='theme-selector'>
      <div className="toggle-button">
          <img 
              src={modeIcon}
              onClick={toggleMode}
              alt="dark/light"
              style={{filter:mode==='dark'?'invert(100%)':'invert(20%)'}}
          />
      </div>
        <div className='theme-buttons'>
            {themeColors.map(color => {
                <button 
                    key={color}
                    onClick={() => changeColor(color)}
                    style={{background:color}}
                />
            })}
        </div>
        
      </div>
    )
}
