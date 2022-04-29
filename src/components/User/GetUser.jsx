import { useState } from "react";
import { UpdateUser } from "./UpdateUser";

export const GetUser = ({ data, setShowUpdate, setSelectedID }) => {
  const url = "https://boiling-castle-70220.herokuapp.com/api/user";

  let options = {
    method: "DELETE",
  };

  const showUpdateHandler = () => {
    setShowUpdate(true);
    setSelectedID(data.id);
    console.log("Running showUpdateHandler....");
  };

  return (
    <div className="listcontainer">
      <b>
        {data.firstname} {data.lastname}
      </b>
      <p>Email: {data.email}</p>
      <p>Password: {data.password}</p>
      <p>Hold: {data.team_id}</p>
      <button onClick={showUpdateHandler}>Edit</button>
      <button
        onClick={() => {
          fetch(url + "/" + data.id, options);
          console.log("deleted " + data.firstname);
        }}
      >
        Delete
      </button>
    </div>
  );
};
