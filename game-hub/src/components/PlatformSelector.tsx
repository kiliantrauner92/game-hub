import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
