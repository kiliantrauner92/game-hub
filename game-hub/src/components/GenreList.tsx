import {
  Text,
  HStack,
  Image,
  VStack,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  const [selectedItem, setSelectedItem] = useState();

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
            <HStack>
              <Image
                boxSize="32px"
                fit="cover"
                borderRadius={8}
                overflow="hidden"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                onClick={() => onSelectGenre(genre)}
                fontSize="md"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default GenreList;
