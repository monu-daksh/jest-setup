
import {useState} from "react"

function ToggleSwitch(){
    const [on, setOn] = useState(false)
    const handleToggle = ()=> setOn(!on)

    return(
        <button onClick={handleToggle} className={`px-4 py-2 rounded-lg ${on ? `bg-green-500` :`bg-gray-400`} text-white`}>{on ? "ON" : 'OFF'}</button>
    )

}

export default ToggleSwitch