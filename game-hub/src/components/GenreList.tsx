import {
  HStack,
  Image,
  VStack,
  List,
  ListItem,
  Button,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  return (
    <VStack align="left">
      <Heading as="h2" fontSize="2xl">
        Genres
      </Heading>
      {isLoading && <Spinner></Spinner>}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
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
