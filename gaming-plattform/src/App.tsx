import { useState } from "react";
import produce from "immer";
import reactLogo from "./assets/react.svg";

import { BsFillCalendarFill } from "react-icons/bs";
import ListGroup from "./components/ListGroup/ListGroup";
import MyButton from "./components/MyButton/MyButton";
import LikeButton from "./components/LikeButton/LikeButton";

function App() {
  let items = ["as1", "as2", "as3"];
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", solved: false },
    { id: 2, title: "Bug2", solved: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, solved: true } : bug)));
  };
  const handleClick2 = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 2);
        if (bug) bug.solved = true;
      })
    );
  };

  return (
    <div className="App">
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.solved ? "Fixed" : "New"}
        </p>
      ))}
      <LikeButton
        defaultState={true}
        onClick={() => {
          console.log("clicked");
          handleClick();
          handleClick2();
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
