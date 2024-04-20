import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button}>Order by: </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
