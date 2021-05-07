import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Wrapper } from "./Wrapper";

interface SearchBarProps {
  value: {
    term: string;
    loading: boolean;
    breweries: any[];
  };
  change?: React.ChangeEventHandler<HTMLInputElement>;
  submit?: React.FormEventHandler<HTMLInputElement> &
    React.MouseEventHandler<HTMLButtonElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, change, submit }) => {
  return (
    <Wrapper
      bgPic="url('./cans.jpg')"
      bgGradient="linear-gradient(36deg, rgba(191,60,60,.5) 15%, rgba(13,23,66,.6) 100%)"
    >
      <Text
        pt={20}
        pb={0}
        fontSize={160}
        color="white"
        fontFamily="Lansdowne"
        transform="skewX(-10deg)"
        textAlign="center"
      >
        Pint Hunter
      </Text>
      <Flex>
        <Input
          variant="flushed"
          color="white"
          placeholder="Search by brewery, city, zip code..."
          mb={250}
          value={value.term}
          onChange={change}
          alignSelf="center"
          mx={10}
          px={2}
        ></Input>
        <Button onClick={submit} isLoading={value.loading}>
          Submit
        </Button>
      </Flex>
    </Wrapper>
  );
};

export default SearchBar;
