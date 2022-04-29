import { useEffect, useState } from "react";

export const UpdateEvent = ({ id, setShowUpdate, data }) => {
  console.log(data);

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [startDate, setStartDate] = useState();
  const [stopDate, setStopDate] = useState();
  const [location, setLocation] = useState();

  const url = "https://boiling-castle-70220.herokuapp.com/api/event";
  console.log(title, content, startDate, stopDate, location);
  let params = new URLSearchParams();
  params.append("title", title);
  params.append("content", content);
  params.append("startDate", startDate);
  params.append("stopDate", stopDate);
  params.append("location", location);

  console.log(params.toString());

  async function PutEvent() {
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
    console.log("UpdateEvent Component Mounted.... ID is: " + id);
    return () => {
      console.log("UpdateEvent Component Un-Mounted...");
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
        <h3>Update Event</h3>
        <label>Title: </label>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>Content: </label>
        <input
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <label>StartDate: </label>
        <input
          value={startDate}
          onChange={(event) => {
            setStartDate(event.target.value);
          }}
        />
        <label>StopDate: </label>
        <input
          value={stopDate}
          onChange={(event) => {
            setStopDate(event.target.value);
          }}
        />
        <label>Location: </label>
        <input
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <button type="button" onClick={PutEvent}>
          Update event
        </button>
      </form>
    </div>
  );
};
