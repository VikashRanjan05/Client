import React, { useState } from "react";
import { Box, VStack, Text, HStack, useDisclosure } from "@chakra-ui/react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { ImTextColor } from "react-icons/im";
import { BiLayout, BiBorderOuter } from "react-icons/bi";
import { MdColorLens } from "react-icons/md";
import { GrClose } from "react-icons/gr";

const Sidebar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const toggle = () => {
    setToggleSideBar(!toggleSideBar);
  };
  return (
    <HStack spacing="-5px">
      <VStack
        w="8vw"
        h="91vh"
        spacing="10"
        pt="20px"
        bgColor="#201e21"
        color="#fff"
        zIndex="2"
      >
        <VStack spacing="2" cursor="pointer" onClick={toggle}>
          <HiOutlinePhotograph size="2rem" />
          <Text>Photo</Text>
        </VStack>
        <VStack spacing="2" cursor="pointer" onClick={toggle}>
          <ImTextColor size="2rem" cursor="pointer" />
          <Text>Text</Text>
        </VStack>
        <VStack spacing="2" cursor="pointer" onClick={toggle}>
          <BiLayout size="2rem" cursor="pointer" />
          <Text>Layout</Text>
        </VStack>
        <VStack spacing="2" cursor="pointer" onClick={toggle}>
          <HiOutlinePhotograph size="2rem" cursor="pointer" />
          <Text>Background</Text>
        </VStack>
        <VStack spacing="2" cursor="pointer" onClick={toggle}>
          <BiBorderOuter size="2rem" cursor="pointer" />
          <Text>Border</Text>
        </VStack>
        <VStack spacing="2" cursor="pointer" onClick={toggle}>
          <MdColorLens size="2rem" cursor="pointer" />
          <Text>Style</Text>
        </VStack>
      </VStack>
      <div
        style={{
          height: "91vh",
          width: "20vw",
          position: "absolute",
          top: "9.3vh",
          left: toggleSideBar ? "8vw" : "-20vw",
          transition: "0.5s",
          bgColor: "#000",
          boxShadow: "0px 3px 6px 3px rgb(0 0 0 / 18%)",
        }}
      >
        <HStack
          justifyContent="flex-end"
          m="10px"
          cursor="pointer"
          onClick={toggle}
        >
          <GrClose size="1.5rem" />
        </HStack>
        <HStack h="8vh" justify="center" align="center" mt="200px">
          <img src="https://img.favpng.com/0/5/1/illustration-drawing-vector-graphics-image-human-png-favpng-5ueL0zBwGz7ST2gshJHdEdagZ.jpg" />
        </HStack>
      </div>
    </HStack>
  );
};

export default Sidebar;
