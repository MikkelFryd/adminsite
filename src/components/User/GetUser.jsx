import { useState } from "react"
import { UpdateUser } from "./UpdateUser"

export const GetUser = ({data, setShowUpdate, setSelectedID}) => {
    const url = 'http://localhost:4000/api/user'

    let options = {
        method: "DELETE",
    }

    const showUpdateHandler = () => {
        setShowUpdate(true)
        setSelectedID(data.id)
        console.log("Running showUpdateHandler....")
    }

    return (
            <div className="listcontainer">
                <b>{data.firstname} {data.lastname}</b>
                <p>{data.email}</p>
                <p>{data.password}</p>
                <p>{data.class_id}</p>
                <button onClick={(showUpdateHandler)}>Edit</button>
                <button onClick={() => {
                    fetch(url + "/" + data.id, options)
                    console.log('deleted ' + data.firstname)
                }}>Delete</button>
            </div>
    )
}