import { useState } from "react";
import produce from "immer";
import reactLogo from "./assets/react.svg";

import { BsFillCalendarFill } from "react-icons/bs";
import ListGroup from "./components/ListGroup/ListGroup";
import MyButton from "./components/MyButton/MyButton";
import LikeButton from "./components/LikeButton/LikeButton";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 1 },
    ],
  });
  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Salami"] });
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 2 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <>
      <p>{game.player.name}</p>
      <p>{pizza.toppings.join(" ")}</p>
      {cart.items.map((item) => (
        <p>
          {item.title} {item.quantity}
        </p>
      ))}
      <button onClick={handleClick}>ChangeName</button>
    </>
  );
}

export default App;
