import { Box, Flex, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./Logo";
import { NavContent } from "./NavContent";

export const Header = () => (
  <Box maxHeight="10vh">
    <Box
      as="header"
      height="16"
      bg={useColorModeValue("white", "gray.800")}
      position="relative"
      boxShadow="0px 3px 6px 3px rgb(0 0 0 / 12%)"
    >
      <Box
        height="100%"
        maxW="7xl"
        mx="auto"
        ps={{
          base: "6",
          md: "8",
        }}
        pe={{
          base: "5",
          md: "0",
        }}
      >
        <Flex
          as="nav"
          aria-label="Site navigation"
          align="center"
          justify="space-between"
          height="100%"
        >
          <Box as="a" href="#" rel="home">
            <VisuallyHidden>Envelope</VisuallyHidden>
            <Logo h="6" iconColor={useColorModeValue("blue.600", "blue.200")} />
          </Box>
          <NavContent.Desktop
            display={{
              base: "none",
              md: "flex",
            }}
          />
          <NavContent.Mobile
            display={{
              base: "flex",
              md: "none",
            }}
          />
        </Flex>
      </Box>
    </Box>
  </Box>
);
