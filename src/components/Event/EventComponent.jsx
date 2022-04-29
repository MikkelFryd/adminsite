import { useEffect, useState } from "react";
import { CreateEvent } from "./CreateEvent";
import { GetEvent } from "./GetEvent";
import { UpdateEvent } from "./UpdateEvent";

export const EventComponent = () => {
  const url = "https://boiling-castle-70220.herokuapp.com/api/event";
  const [eventData, setEventData] = useState([]);
  const [showCreate, setShowCreate] = useState();
  const [showUpdate, setShowUpdate] = useState(false);
  const [selectedID, setSelectedID] = useState();

  const fetchHeaders = new Headers();
  fetchHeaders.append("Accept", "application/json");

  const options = {
    headers: fetchHeaders,
  };

  useEffect(() => {
    fetch(url, options)
      .then((data) => data.json())

      .then((json) => {
        const newArray = [];
        for (const item of json) {
          newArray[item.id] = item;
        }
        console.log(newArray);
        setEventData(newArray);
      });
  }, []);

  return (
    <>
      <section>
        {showUpdate && (
          <UpdateEvent
            data={eventData[selectedID]}
            id={selectedID}
            showUpdate={showUpdate}
            setShowUpdate={setShowUpdate}
          />
        )}
        {eventData &&
          eventData.map((item, index) => {
            return (
              <GetEvent
                setSelectedID={setSelectedID}
                setShowUpdate={setShowUpdate}
                key={item.id}
                data={item}
              />
            );
          })}
      </section>
    </>
  );
};
