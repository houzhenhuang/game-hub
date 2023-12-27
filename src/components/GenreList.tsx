import useGenres from "../hooks/useGenres";
import { HStack, List, ListItem, Text, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

/**
 * 游戏类型列表
 * @returns
 */
function GenreList() {
  const { data, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
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
    </>
  );
}

export default GenreList;
