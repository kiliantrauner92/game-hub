import {
  Badge,
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game, Platform } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import RatingIcon from "./RatingIcon";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  console.log(game);
  return (
    <Card shadow="xl" borderRadius="lg" overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody p="4">
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <RatingIcon ratings={game.ratings} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
