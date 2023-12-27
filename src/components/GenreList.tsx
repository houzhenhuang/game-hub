import useGenres from "../hooks/useGenres";
import { HStack, List, ListItem, Text, Image, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

/**
 * 游戏类型列表
 * @returns
 */
function GenreList() {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
