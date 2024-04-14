import { Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, setGames, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;