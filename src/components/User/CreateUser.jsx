import { useState } from "react"

export const CreateUser = ({showCreate}) => {
    const url = 'http://localhost:4000/api/user'
    
    const [ firstName, setFirstName ] = useState()
    const [ lastName, setLastName ] = useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const [ class_id, setClass_id ] = useState()


    async function PostUser() {
        console.log(firstName, lastName, email, password, class_id)
        let params = new URLSearchParams()
        params.append("firstname", firstName)
        params.append("lastname", lastName)
        params.append("email", email)
        params.append("password", password)
        params.append("class_id", class_id)

        console.log(params.toString())

        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: params
        }
        try {
            let data = await fetch(url, options)
            data = await data.json()
            console.log(data)
                    }
                    catch(err) {
                        console.error(err)
                    }
    }
    return (
      <form className="createform" method="post">
            <span onClick={() => {showCreate(false)}} className="closebtn">&times;</span>
            <label>Firstname: </label>
            <input onChange={(event) => {
                setFirstName(event.target.value)
            }} />
                <label>Lastname: </label>
            <input onChange={(event) => {
                setLastName(event.target.value)
            }} />
                <label>Email: </label>
            <input onChange={(event) => {
                setEmail(event.target.value)
            }} />
                <label>Password: </label>
            <input onChange={(event) => {
                setPassword(event.target.value)
            }} />
                <label>Class_id: </label>
            <input onChange={(event) => {
                setClass_id(event.target.value)
            }} />
            <button type="button" onClick={(PostUser)}>Post user</button>
        </form>
    )
}