import {
  Text,
  HStack,
  Image,
  VStack,
  ListIcon,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  const [selectedsetSelectItem, setSelectedItem] = useState();

  if (error) return null;
  return (
    <VStack align="left">
      <Text as="b" fontSize="xl">
        Genres
      </Text>
      {isLoading && <Spinner></Spinner>}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack onClick={() => setSelectedItem}>
              <Image
                boxSize="32px"
                fit="cover"
                borderRadius={8}
                overflow="hidden"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="md">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default GenreList;
