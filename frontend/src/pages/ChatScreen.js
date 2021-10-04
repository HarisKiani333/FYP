import React from "react";
import Chat from "../components/chat";
// import io from "socket.io-client";


// const socket = io.connect('/');

export default function ChatScreen(props) {

  return (
      <>
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={props.socket}
        />
    </>
  );
}
