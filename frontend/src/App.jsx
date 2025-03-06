import React, { useState } from "react";
import axios from 'axios'
import { Backend_url } from "./constants/Backend_url.jsx";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const fetchGreeting = async () => {
    if (!name) {
      setMessage("Name is required.");
      return;
    }
    try {
      const response = await axios.get(`${Backend_url}/api/greet?name=${name}`);
      if(response.data){
      setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Error fetching greeting.",error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Greeting App</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={fetchGreeting}>Get Greeting</button>
      <p>{message}</p>
    </div>
  );
};

export default App;
