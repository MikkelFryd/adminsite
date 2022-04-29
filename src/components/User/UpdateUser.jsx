import { useEffect, useState } from "react";

export const UpdateUser = ({ id, setShowUpdate, data }) => {
  console.log(data);

  const [firstname, setFirstName] = useState(data.firstname);
  const [lastname, setLastName] = useState(data.lastname);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);
  const [team_id, setTeam_id] = useState(data.team_id);

  const url = "https://boiling-castle-70220.herokuapp.com/api/user";
  console.log(firstname, lastname, email, password, team_id);
  let params = new URLSearchParams();
  params.append("firstname", firstname);
  params.append("lastname", lastname);
  params.append("email", email);
  params.append("password", password);
  params.append("team_id", team_id);
  params.append("id", id);

  console.log(params.toString());

  async function PutUser() {
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: params,
    };
    try {
      let data = await fetch(url, options);
      data = await data.text();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log("UpdateUser Component Mounted.... ID is: " + id);
    return () => {
      console.log("UpdateUser Component Un-Mounted...");
    };
  }, []);
  return (
    <div className="putcontainer">
      <form className="putform" method="put">
        <span
          onClick={() => {
            setShowUpdate(false);
          }}
          className="closebtn"
        >
          &times;
        </span>
        <h3>Update User</h3>
        <label>Firstname: </label>
        <input
          value={firstname}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <label>Lastname: </label>
        <input
          value={lastname}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <label>Email: </label>
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Password: </label>
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <label>Team_id: </label>
        <input
          value={team_id}
          onChange={(event) => {
            setTeam_id(event.target.value);
          }}
        />
        <button type="button" onClick={PutUser}>
          Update user
        </button>
      </form>
    </div>
  );
};
