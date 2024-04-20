import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  onSelectSortOrder: (selectedSortOrder: string) => void;
  selectedSortOrder: string | null;
}

const SortSelector = ({
  onSelectSortOrder: onSelectSort,
  selectedSortOrder: selectedSort,
}: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOder = sortOrder.find((item) => item.value === selectedSort);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order by: <b>{currentSortOder?.label || sortOrder[0].label}</b>
      </MenuButton>
      <MenuList>
        {sortOrder.map((item, index) => (
          <MenuItem key={index} onClick={() => onSelectSort(item.value)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
