import React from "react";
import { Box, Heading, Text, Button, Flex, Image, Tabs, TabList, Tab, Icon, Divider } from "@chakra-ui/react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const menuItems = ["Explore", "Learn", "Individuals", "Businesses", "Developers", "Company"];
const cryptoData = [
  { name: "Bitcoin", price: "$70,201.58", change: "-0.75%", isUp: false, logo: "https://images.unsplash.com/photo-1707075891517-c23d276feef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiaXRjb2luJTIwbG9nb3xlbnwwfHx8fDE3MTI4ODEzODB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Ethereum", price: "$3,509.74", change: "-0.98%", isUp: false, logo: "https://images.unsplash.com/photo-1651221436727-28b9c922db97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxldGhlcmV1bSUyMGxvZ298ZW58MHx8fHwxNzEyODgxMzgwfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Tether", price: "$1.00", change: "0.01%", isUp: true, logo: "https://images.unsplash.com/photo-1666649507247-6226902955c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZXRoZXIlMjBsb2dvfGVufDB8fHx8MTcxMjg4MTM4MHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Solana", price: "$150.05", change: "-0.73%", isUp: false, logo: "https://images.unsplash.com/photo-1655474209351-054aac9d586f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2xhbmElMjBsb2dvfGVufDB8fHx8MTcxMjg4MTM4MXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "XRP", price: "$1.35", change: "-1.64%", isUp: false, logo: "https://images.unsplash.com/photo-1614002128779-35f1ffaa5b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx4cnAlMjBsb2dvfGVufDB8fHx8MTcxMjg4MTM4MXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "USDC", price: "$1.00", change: "0.00%", isUp: true, logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2RjJTIwbG9nb3xlbnwwfHx8fDE3MTI4ODEzODF8MA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  return (
    <Box>
      {/* Top Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="white" color="gray.600">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"} color="blue.500">
            Coinbase
          </Heading>
        </Flex>

        <Box display={{ base: "none", md: "flex" }} mt={{ base: 4, md: 0 }}>
          {menuItems.map((item) => (
            <Text mt={{ base: 4, md: 0 }} mr={6} display="block" key={item}>
              {item}
            </Text>
          ))}
          <Button variant="outline" mr={4}>
            Sign in
          </Button>
          <Button colorScheme="blue">Sign up</Button>
        </Box>
      </Flex>

      {/* Main Content */}
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Explore crypto like{" "}
          <Text as="span" color="blue.500">
            Bitcoin, Ethereum, and Dogecoin
          </Text>
        </Heading>
        <Text color={"gray.500"} mb={6}>
          Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
        </Text>
        <Button colorScheme="blue" size="lg">
          See more assets
        </Button>
      </Box>

      {/* Tabs */}
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab _selected={{ color: "white", bg: "blue.500" }}>Tradable</Tab>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>Top Gainers</Tab>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>New on Coinbase</Tab>
        </TabList>
      </Tabs>

      {/* Crypto Price Cards */}
      <Flex flexWrap="wrap" justifyContent="center">
        {cryptoData.map((crypto) => (
          <Box key={crypto.name} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} boxShadow="md">
            <Flex p={6} align="center">
              <Image src={crypto.logo} alt={`${crypto.name} logo`} boxSize="50px" mr={4} />
              <Box>
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                    {crypto.name}
                  </Box>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  {crypto.price}
                </Box>

                <Flex alignItems="center" mt={2}>
                  <Icon as={crypto.isUp ? FaArrowUp : FaArrowDown} color={crypto.isUp ? "green.500" : "red.500"} />
                  <Text ml={1} color={crypto.isUp ? "green.500" : "red.500"}>
                    {crypto.change}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
      <Divider my={12} />
    </Box>
  );
};

export default Index;
