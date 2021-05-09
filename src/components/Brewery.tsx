import { Badge, Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Wrapper } from "./Wrapper";

interface BrewProps {
  data: {
    term: string;
    loading: boolean;
    breweries: any[];
  };
}

const Brewery: React.FC<BrewProps> = ({ data }) => {
  const sillyReponse = [
    '“I feel bad for people who don’t drink. When they wake up in the morning, that’s as good as they’re going to feel all day.” - Frank Sinatra"',
    '“All is fair in love and beer." - Kurt Paradis',
    "“Always do sober what you said you’d do drunk. That will teach you to keep your mouth shut.” - Ernest Hemingway",
    "“Beer is proof that God loves us and wants us to be happy.” - Benjamin Franklin",
    "“If you drink, don’t drive. Don’t even putt.” - Dean Martin",
    "“So when the devil says to you, ‘Do not drink,’ answer him: ‘I will drink, and right freely, just because you tell me not to.’ One must always do what Satan forbids.” - Martin Luther",
    "“The mouth of a perfectly happy man is filled with beer.” - Ancient Egyptian Wisdom, 2200 B.C.",
  ];

  const randomResponse = () => {
    let num = Math.floor(Math.random() * sillyReponse.length);
    return sillyReponse[num];
  };

  if (!data.loading && data.breweries.length === 0) {
    return (
      <Wrapper variant="small" bgTone={{ light: "white", dark: "white" }}>
        <Box p={10} textAlign="center">
          <Text fontFamily="Lansdowne" fontSize={34}>
            no results...
          </Text>
          <Text>{randomResponse()}</Text>
        </Box>
      </Wrapper>
    );
  }

  return (
    <Wrapper bgTone={{ light: "white", dark: "white" }}>
      <Flex wrap="wrap" justifyContent="center">
        {!data.loading ? (
          data.breweries.map((item) => {
            return (
              <Box
                key={item.id}
                borderWidth="1px"
                borderColor="rgba(0, 0, 0, 0.3)"
                borderRadius="lg"
                overflow="hidden"
                w={320}
                m={4}
                h={380}
              >
                <Text p={4} fontSize={24} textAlign="center" h={28}>
                  {item.name}
                </Text>
                <Image src="/mug.jpg" alt="pint" h={180} m="auto" />
                <Box d="flex" alignItems="baseline" p={4}>
                  <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme={
                      item.brewery_type === "planning" ? "red" : "teal"
                    }
                  >
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
    </Wrapper>
  );
};

export default Brewery;
