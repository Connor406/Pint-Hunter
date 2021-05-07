import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface BrewProps {
  data: {
    term: string;
    loading: boolean;
    breweries: any[];
  };
}

const Brewery: React.FC<BrewProps> = ({ data }) => {
  return (
    <Flex wrap="wrap" justifyContent="center">
      {!data.loading ? (
        data.breweries.map((item) => {
          return (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              w={320}
              m={4}
              h={320}
            >
              <Flex p={4}>
                <Text fontSize={24}>{item.name}</Text>
              </Flex>
              <Box d="flex" alignItems="baseline" p={4}>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {item.brewery_type}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {item.city}, {item.state} &bull; {item.street}
                </Box>
              </Box>
            </Box>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </Flex>
  );
};

export default Brewery;
