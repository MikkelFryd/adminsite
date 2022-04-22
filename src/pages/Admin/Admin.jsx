import { UserComponent } from "../../components/User/UserComponent"
import { useState } from "react"


export const Admin = () => {

    let [ ActivePage, setActivePage ] = useState(<UserComponent/>)
    
    return (
        <>
            <nav>
                <button onClick={() => {setActivePage(<UserComponent/>)}}>User</button>
                <button>Event</button>
                <button>Team</button>
            </nav>
            {ActivePage ?
                ActivePage : ""
            }
          
        </>
    )
}