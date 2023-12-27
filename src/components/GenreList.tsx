import useGenres from "../hooks/useGenres";
import { SimpleGrid, Text } from "@chakra-ui/react";

/**
 * 游戏类型列表
 * @returns
 */
function GenreList() {
  const { genres, error, isLoading } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;
