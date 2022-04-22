import { useEffect, useState } from "react"
import { CreateUser } from "./CreateUser"
import { GetUser } from "./GetUser"


export const UserComponent = () => {
    const url = 'http://localhost:4000/api/user'
    const [ userData, setUserData ] = useState([])
    const [ showCreate, setShowCreate ] = useState()

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
            {showCreate && <CreateUser/>}
        <section>
        {userData && userData.map((item, index) => {
            return (
                <GetUser key={item.id} data={item} />
            )
        })}
        </section>
            </>
    )
}