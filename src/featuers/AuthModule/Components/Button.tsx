

function Button(){


    const handleClick=()=>{
        alert("Button click")
    }



    return(
        <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Click me!
        </button>
    )


}

export default Button