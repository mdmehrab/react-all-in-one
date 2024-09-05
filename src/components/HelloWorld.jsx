// src/components/HelloWorld.js

import React, { useContext } from "react";
import { HelloContext } from "../context/HelloContext";

const HelloWorld = () => {
  const { message, updateMessage } = useContext(HelloContext);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={updateMessage}>Click me</button>
    </div>
  );
};

export default HelloWorld;
