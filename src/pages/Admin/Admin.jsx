import { UserComponent } from "../../components/User/UserComponent"
import { useState } from "react"
import { TeamComponent } from "../../components/Team/TeamComponent"
import { EventComponent } from "../../components/Event/EventComponent"
import { CreateUser } from "../../components/User/CreateUser"


export const Admin = () => {

    let [ ActivePage, setActivePage ] = useState(<UserComponent/>)
    const [ showCreate, setShowCreate ] = useState()


    return (
        <div className="maincontainer">
            <nav>
                <h1>Admin panel</h1>
            <button className="createbtn" onClick={(setShowCreate)}>Create user</button>
            {showCreate && <CreateUser showCreate={setShowCreate}/>}
                <button onClick={() => {setActivePage(<UserComponent/>)}}>User</button>
                <button onClick={() => {setActivePage(<EventComponent/>)}}>Event</button>
                <button onClick={() => {setActivePage(<TeamComponent/>)}}>Team</button>
            </nav>
            {ActivePage ?
                ActivePage : ""
            }
        </div>
    )
}