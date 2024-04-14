import {
  Badge,
  Box,
  Card,
  CardBody,
  Center,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Game, Platform } from "../hooks/useGames";

const GameCard = (game: Game) => {
  console.log(game);
  return (
    <Card borderRadius="lg" overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody p="4">
        <Box display="flex" alignItems="baseline">
          {game.parent_platforms.map(({ platform, released_at }) => (
            <p key={platform.id}>{platform.name}</p>
          ))}
          <Badge colorScheme="green" borderRadius={3}>
            {game.metacritic}
          </Badge>
        </Box>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* <Icon>{game.rating}</Icon> */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
