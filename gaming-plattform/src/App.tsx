import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { BsFillCalendarFill } from "react-icons/bs";
import ListGroup from "./components/ListGroup/ListGroup";
import MyButton from "./components/MyButton/MyButton";
import LikeButton from "./components/LikeButton/LikeButton";

function App() {
  let items = ["as1", "as2", "as3"];

  return (
    <div className="App">
      <LikeButton
        defaultState={true}
        onClick={() => {
          console.log("clicked");
        }}
      />
      {/* <BsFillCalendarFill color="red" size="40" />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={() => {}}
      ></ListGroup>
      <MyButton children="Primary" onClick={() => {}} />
      <MyButton children="Success" onClick={() => {}} color="success" /> */}
    </div>
  );
}

export default App;
