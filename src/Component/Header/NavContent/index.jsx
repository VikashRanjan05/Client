import {
  Box,
  Button,
  Center,
  HStack,
  Stack,
  StackDivider,
  useColorModeValue,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu, HiX, HiEye } from "react-icons/hi";
import { BiSave, BiHelpCircle } from "react-icons/bi";
import { NavLink } from "../NavLink";
import { NavList } from "../NavList";
import { NavListItem } from "../NavListItem";
const links = [
  {
    label: "Save",
    href: "#",
    icon: "BiSave",
  },
  {
    label: "Help",
    href: "#",
    icon: "BiHelpCircle",
  },
  {
    label: "Preview",
    href: "#",
    icon: "BiSave",
  },
];

const MobileNavContent = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props}>
      <Center
        as="button"
        p="2"
        fontSize="2xl"
        color={useColorModeValue("gray.600", "gray.400")}
        onClick={onToggle}
      >
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        bg="blue.600"
        top="64px"
        animate={isOpen ? "enter" : "exit"}
      >
        <Stack
          spacing="0"
          divider={<StackDivider borderColor="whiteAlpha.200" />}
        >
          {links.map((link, index) => (
            <NavListItem key={index}>
              <NavLink.Mobile href={link.href}>
                <HStack px="20px">
                  <Box>
                    {link.label === "Save" ? (
                      <BiSave />
                    ) : link.label === "Help" ? (
                      <BiHelpCircle />
                    ) : (
                      <HiEye />
                    )}
                  </Box>
                  <Text>{link.label}</Text>
                </HStack>
              </NavLink.Mobile>
            </NavListItem>
          ))}
          <NavListItem
            style={{
              flex: "1",
            }}
          >
            <NavLink.Mobile href="#">ADD TO CART</NavLink.Mobile>
          </NavListItem>
        </Stack>
      </NavList>
    </Box>
  );
};

const DesktopNavContent = (props) => {
  return (
    <HStack spacing="8" align="stretch" {...props}>
      {links.map((link, index) => (
        <NavLink.Desktop key={index} href={link.href}>
          <HStack>
            <Box>
              {link.label === "Save" ? (
                <BiSave />
              ) : link.label === "Help" ? (
                <BiHelpCircle />
              ) : (
                <HiEye />
              )}
            </Box>
            <Text>{link.label}</Text>
          </HStack>
        </NavLink.Desktop>
      ))}
      <Button
        height="12"
        rounded="5"
        colorScheme="blue"
        minW="10rem"
        align="center"
      >
        ADD TO CART
        <Box p="5px" bgColor="#0c2a4f" ml="5px" borderRadius="5px">
          <Text fontSize="12px">$99.00</Text>
        </Box>
      </Button>
    </HStack>
  );
};

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};
