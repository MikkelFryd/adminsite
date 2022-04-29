import { useEffect, useState } from "react";
import { CreateUser } from "./CreateUser";
import { GetUser } from "./GetUser";
import { UpdateUser } from "./UpdateUser";

export const UserComponent = () => {
  const url = "https://boiling-castle-70220.herokuapp.com/api/user";
  const [userData, setUserData] = useState([]);
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
        setUserData(newArray);
      });
  }, []);

  return (
    <>
      <section>
        {showUpdate && (
          <UpdateUser
            data={userData[selectedID]}
            id={selectedID}
            showUpdate={showUpdate}
            setShowUpdate={setShowUpdate}
          />
        )}
        {userData &&
          userData.map((item, index) => {
            return (
              <GetUser
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
