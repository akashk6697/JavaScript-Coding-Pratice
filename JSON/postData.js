
const addUser = async () => {
    const newUser = {
      name: "Akash Kushwah",
      email: "akash@example.com"
    };
  
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser), // Convert object to JSON
    });
  
    const data = await response.json();
    console.log("User added:", data);
  };
  
  addUser();
  