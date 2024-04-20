import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  return (
    <InputGroup marginX={5}>
      <InputLeftElement pointerEvents="none">
        <BsSearch color="gray.300" />
      </InputLeftElement>
      <Input
        borderRadius={100}
        paddingX={10}
        type="search"
        placeholder="Search games..."
        variant="filled"
      ></Input>
    </InputGroup>
  );
};
