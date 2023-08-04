import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserList() {
  const [allUser, setAllUser] = useState([]);
  const [value, setValue] = useState(8);

  async function getAllUsers() {
    const res = await fetch(`https://randomuser.me/api/?results=${value}`);
    const data = await res.json();
    setAllUser(data.results);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  function handleInputChange(e) {
    // Ensure the entered value is a positive integer
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue > 0) {
      setValue(inputValue);
    }
  }
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Search
          value={value}
          setValue={setValue}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="main-container">
        {allUser.map((user) => (
          <UserCard
            gender={user.gender}
            firstName={user.name.first}
            lastName={user.name.last}
            country={user.location.country}
            city={user.location.city}
            image={user.picture.large}
          />
        ))}
      </div>
    </>
  );
}

function Search({ value, handleInputChange }) {
  return (
    <input
      type="number"
      className="search"
      value={value}
      onChange={handleInputChange}
    />
  );
}

export default UserList;
