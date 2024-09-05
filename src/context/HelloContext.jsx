// src/context/HelloContext.js

import React, { createContext, useState } from "react";

// Create a Context
const HelloContext = createContext();

// Create a Context Provider Component
const HelloProvider = ({ children }) => {
  const [message, setMessage] = useState("Hello, World!");

  // Function to change the message
  const updateMessage = () => {
    setMessage("You clicked the button!");
  };

  return (
    <HelloContext.Provider value={{ message, updateMessage }}>
      {children}
    </HelloContext.Provider>
  );
};

export { HelloProvider, HelloContext };
