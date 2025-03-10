import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
//// 1st approach using fetch api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // API returns JSON
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setUsers(data)) // Update state with fetched data
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  // 2nd approach using axios

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data)) // Axios automatically parses JSON
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
