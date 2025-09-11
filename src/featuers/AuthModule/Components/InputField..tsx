
import {useState} from "react"


function InputField(){
    const [input, setInput] = useState("")

    const handleInput = (e:any) => setInput(e.target.value)

    return(
        <div className="y-2">
            <input
             value={input}
             onChange={handleInput}
             placeholder="type..."
             className="p-2 border rounded w-full"
            />
            <p className="mt-4 text-gray-600">you typed:{input}</p>

        </div>
    )



}

export default InputField