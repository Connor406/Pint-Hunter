import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useScreenSize } from "../hooks/useScreenSize";
import { Wrapper } from "./Wrapper";

interface SearchBarProps {
  value: {
    term: string;
    loading: boolean;
    filterLocation: string;
    breweries: string[];
  };
  change?: React.ChangeEventHandler<HTMLInputElement>;
  submit?: React.FormEventHandler<HTMLInputElement> &
    React.MouseEventHandler<HTMLButtonElement> &
    React.KeyboardEventHandler<HTMLInputElement>;
  filterLoc?: React.MouseEventHandler<HTMLDivElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  change,
  submit,
  filterLoc,
}) => {
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
      <Flex flexWrap="wrap" justifyContent="center" color="white">
        {/* <Menu>
          <MenuButton as={Button} mx={2} rightIcon={<ChevronDownIcon />}>
            {value.filterLocation}
          </MenuButton>
          <MenuList onClick={filterLoc}>
            <MenuItem value="City">City</MenuItem>
            <MenuItem value="State">State</MenuItem>
            <MenuItem value="Zipcode">Zipcode</MenuItem>
            <MenuItem value="Brewery name">Brewery name</MenuItem>
          </MenuList>
        </Menu> */}
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
