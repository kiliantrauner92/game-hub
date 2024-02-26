import { useState } from "react";
import reactLogo from "./assets/react.svg";

import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  let items = ["as1", "as2", "as3"];

  return (
    <div className="App">
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
