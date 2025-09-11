import {useState} from "react"

function Counter(){

    const [count, setCount] = useState(0)

    return(
        <div className="p-4 w-48 text-center rounded-lg border">
          <p className="text-lg font-semibold">Count: {count}</p>
          <button onClick={()=> setCount(count+1)} className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-700 transition">
            increment
          </button>
        </div>
    )

}

export default Counter