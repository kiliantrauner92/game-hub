import React from "react";
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

import { Platform } from "../hooks/useGames";

interface Props {
  platform: Platform[];
}
const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack padding={2}>
      {platform.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
