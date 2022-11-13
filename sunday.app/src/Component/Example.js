
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

const Example=()=> {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=count
    },null)
    const countHandler=()=>{
        setCount(count-1)
        
    }
    return(
        <div>
            <h1>My State ={count}</h1>
            <Button onClick={countHandler}>Count</Button>
        </div>
        
    )
}
export default Example