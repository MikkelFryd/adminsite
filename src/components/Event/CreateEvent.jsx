import { useState } from "react";

export const CreateEvent = ({ showCreate }) => {
  const url = "https://boiling-castle-70220.herokuapp.com/api/event";

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [startDate, setStartDate] = useState();
  const [stopDate, setStopDate] = useState();
  const [location, setLocation] = useState();

  async function PostEvent() {
    console.log(title, content, startDate, stopDate, location);
    let params = new URLSearchParams();
    params.append("title", title);
    params.append("content", content);
    params.append("startDate", startDate);
    params.append("stopDate", stopDate);
    params.append("location", location);

    console.log(params.toString());

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: params,
    };
    try {
      let data = await fetch(url, options);
      data = await data.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="createcontainer">
      <form className="createform" method="post">
        <span
          onClick={() => {
            showCreate(false);
          }}
          className="closebtn"
        >
          &times;
        </span>
        <h2>Create Event</h2>
        <label>Title: </label>
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>Content: </label>
        <input
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <label>StartDate: </label>
        <input
          onChange={(event) => {
            setStartDate(event.target.value);
          }}
        />
        <label>StopDate: </label>
        <input
          onChange={(event) => {
            setStopDate(event.target.value);
          }}
        />
        <label>Location: </label>
        <input
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <button type="button" onClick={PostEvent}>
          Post event
        </button>
      </form>
    </div>
  );
};
