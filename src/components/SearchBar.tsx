import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useScreenSize } from "../hooks/useScreenSize";
import { Wrapper } from "./Wrapper";

interface SearchBarProps {
  value: {
    term: string;
    loading: boolean;
    breweries: any[];
  };
  change?: React.ChangeEventHandler<HTMLInputElement>;
  submit?: React.FormEventHandler<HTMLInputElement> &
    React.MouseEventHandler<HTMLButtonElement> &
    React.KeyboardEventHandler<HTMLInputElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, change, submit }) => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Wrapper
      bgPic={isTablet ? "url('./mug.jpg')" : "url('./cans.jpg')"}
      bgGradient="linear-gradient(36deg, rgba(191,60,60,.5) 15%, rgba(13,23,66,.6) 100%)"
      height={650}
    >
      <Text
        pt={20}
        pb={0}
        fontSize={!isTablet ? 160 : 90}
        color="white"
        fontFamily="Lansdowne"
        transform="skewX(-10deg)"
        textAlign="center"
      >
        Pint Hunter
      </Text>
      <Flex flexWrap="wrap" justifyContent="center">
        <Input
          variant="flushed"
          color="white"
          placeholder={
            !isTablet
              ? "Search by brewery, city, zip code..."
              : "Search breweries"
          }
          value={value.term}
          onChange={change}
          onKeyPress={(e) => {
            e.key === "Enter" ? submit(e) : null;
          }}
          alignSelf="center"
          mb={4}
          mx={10}
          px={2}
        />
        <Button onClick={submit} isLoading={value.loading}>
          Submit
        </Button>
      </Flex>
    </Wrapper>
  );
};

export default SearchBar;
