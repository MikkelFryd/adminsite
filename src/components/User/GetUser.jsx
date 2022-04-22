import { useState } from "react"
import { UpdateUser } from "./UpdateUser"

export const GetUser = ({data}) => {
    const url = 'http://localhost:4000/api/user'

    const [ showUpdate, setShowUpdate ] = useState()

    let options = {
        method: "DELETE",
    }

    return (
            <div>
                <p>{data.firstname}</p>
                <p>{data.lastname}</p>
                <p>{data.email}</p>
                <p>{data.password}</p>
                <p>{data.class_id}</p>
                <button onClick={(setShowUpdate)}>Edit</button>
                {showUpdate && <UpdateUser data={data}/>}
                <button onClick={() => {
                    fetch(url + "/" + data.id, options)
                    console.log('deleted ' + data.firstname)
                }}>Delete</button>
            </div>
    )
}