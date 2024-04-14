import React from "react";
import { Game } from "../hooks/useGames";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      colorScheme={score > 75 ? "green" : score > 50 ? "yellow" : "red"}
      borderRadius={3}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
