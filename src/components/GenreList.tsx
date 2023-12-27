import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

/**
 * 游戏类型列表
 * @returns
 */
function GenreList() {
  const { data, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;
