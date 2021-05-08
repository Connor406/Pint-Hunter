import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
  bgTone?: { light: string; dark: string };
  bgPic?: string;
  bgGradient?: string;
  height?: number;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
  bgTone,
  bgPic,
  bgGradient,
  height,
}) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "rgba(0, 0, 0, 0.491)",
    dark: "rgba(0, 0, 0, 0.491)",
  };
  const color = { light: "black", dark: "black" };

  return (
    <Box
      color={color[colorMode]}
      bgImage={bgPic}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box
        mt={0}
        mx="auto"
        px={variant === "regular" ? "10%" : "20%"}
        w="100%"
        bgColor={bgTone ? bgTone[colorMode] : bgColor[colorMode]}
        bgGradient={bgGradient}
        height={height}
      >
        {children}{" "}
      </Box>
    </Box>
  );
};
