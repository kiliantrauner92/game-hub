import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  defaultState: boolean;
  onClick: () => void;
}

const LikeButton = ({ defaultState, onClick }: Props) => {
  const [status, setStatus] = useState(defaultState);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <AiFillHeart size={500} color="#ff6b81" onClick={toggle} />;
  return <AiOutlineHeart size={500} onClick={toggle} />;
};

export default LikeButton;
