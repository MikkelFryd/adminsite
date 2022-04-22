import { UserComponent } from "../../components/User/UserComponent"
import { useState } from "react"
import { TeamComponent } from "../../components/Team/TeamComponent"
import { EventComponent } from "../../components/Event/EventComponent"


export const Admin = () => {

    let [ ActivePage, setActivePage ] = useState(<UserComponent/>)

    return (
        <>
            <nav>
                <button onClick={() => {setActivePage(<UserComponent/>)}}>User</button>
                <button onClick={() => {setActivePage(<EventComponent/>)}}>Event</button>
                <button onClick={() => {setActivePage(<TeamComponent/>)}}>Team</button>
            </nav>
            {ActivePage ?
                ActivePage : ""
            }
          
        </>
    )
}