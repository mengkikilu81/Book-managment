import Hello from "./Hello"
import Computer from "./Computer"
const Home=(props)=>{
    
        let x=props.copy
        if(x){
            return <Computer/>
        }
        return <Hello/>
    
}
export default Home