import { useEffect, useState } from "react"
import { CreateUser } from "./CreateUser"
import { GetUser } from "./GetUser"
import { UpdateUser } from "./UpdateUser"


export const UserComponent = () => {
    const url = 'http://localhost:4000/api/user'
    const [ userData, setUserData ] = useState([])
    const [ showCreate, setShowCreate ] = useState()
    const [ showUpdate, setShowUpdate ] = useState(false)
    const [ selectedID, setSelectedID ] = useState()

    const fetchHeaders = new Headers()
    fetchHeaders.append("Accept", "application/json")

    const options = {
        headers: fetchHeaders
    }

    useEffect(() => {
        fetch(url, options)
        .then(data => data.json())
        .then(json => setUserData(json.data))
        console.log(userData)
    }, [])

    return (
            <>
            <button className="createbtn" onClick={(setShowCreate)}>Create user</button>
            {showCreate && <CreateUser showCreate={setShowCreate}/>}
        <section>
        {showUpdate && <UpdateUser id={selectedID} showUpdate={showUpdate} setShowUpdate={setShowUpdate}/> }
        {userData && userData.map((item, index) => {
            return (
                <GetUser setSelectedID={setSelectedID} setShowUpdate={setShowUpdate} key={item.id} data={item} />
            )
        })}
        </section>
            </>
    )
}