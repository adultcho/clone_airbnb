import React from "react";
import io from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io.connect("http://localhost:3001");

function socketprac() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {});
  }, [socket]);

  return (
    <div className="socket_io_prac_container">
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
}

export default socketprac;
