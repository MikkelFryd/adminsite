import { useState } from "react";
import { UpdateEvent } from "./UpdateEvent";

export const GetEvent = ({ data, setShowUpdate, setSelectedID }) => {
  const url = "https://boiling-castle-70220.herokuapp.com/api/event";

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
      <b>{data.title}</b>
      <p> {data.content}</p>
      <p>StartDate: {data.startdate}</p>
      <p>StopDate: {data.stopdate}</p>
      <p>Location: {data.location}</p>
      <button onClick={showUpdateHandler}>Edit</button>
      <button
        onClick={() => {
          fetch(url + "/" + data.id, options);
          console.log("deleted " + data.title);
        }}
      >
        Delete
      </button>
    </div>
  );
};
