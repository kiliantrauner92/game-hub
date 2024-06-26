import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import RatingIcon from "./RatingIcon";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody p={3}>
        <HStack justifyContent={"space-between"} marginBottom={2}>
          <PlatformIconList
            platform={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Box display="flex" alignItems="center">
          <Heading fontSize="2xl">{game.name}</Heading>
          <Box flexShrink={0}>
            <RatingIcon rating={game.rating_top} />
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default GameCard;
