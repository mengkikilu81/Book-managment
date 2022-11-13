import Login from "./LogIn"
import Logout from "./Logout"

const User =(props)=>{
    return(
        <div>
            {
                props.inLoogedIn ?<Logout/>:<Login/>
            }

        </div>
    )
}
export default User