import {
  ColorModeContext,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark" ? true : false}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? "Dark" : "Light"} Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
