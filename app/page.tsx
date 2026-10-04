import Image from "next/image";
import { Box, Code, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      direction="column"
      flex="1"
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.50"
      _dark={{ bg: "black" }}
    >
      <Flex
        as="main"
        direction="column"
        flex="1"
        w="full"
        maxW="3xl"
        align={{ base: "center", sm: "flex-start" }}
        justify="space-between"
        py="32"
        px="16"
        bg="white"
        _dark={{ bg: "black" }}
      >
        <Box _dark={{ filter: "invert(1)" }}>
          <Image src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
        </Box>

        <Stack
          gap="6"
          align={{ base: "center", sm: "flex-start" }}
          textAlign={{ base: "center", sm: "left" }}
        >
          <Heading
            as="h1"
            maxW="xs"
            fontSize="3xl"
            fontWeight="semibold"
            lineHeight="10"
            letterSpacing="tight"
            color="black"
            _dark={{ color: "gray.50" }}
          >
            To get started, edit the <Code>page.tsx</Code> file.
          </Heading>
          <Text maxW="md" fontSize="lg" lineHeight="8" color="gray.600" _dark={{ color: "gray.400" }}>
            Looking for a starting point or more instructions? Head over to{" "}
            <Link
              href="https://vercel.com/templates?framework=next.js"
              fontWeight="medium"
              color="gray.950"
              _dark={{ color: "gray.50" }}
            >
              Templates
            </Link>{" "}
            or the{" "}
            <Link
              href="https://nextjs.org/learn"
              fontWeight="medium"
              color="gray.950"
              _dark={{ color: "gray.50" }}
            >
              Learning
            </Link>{" "}
            center.
          </Text>
        </Stack>

        <Stack direction={{ base: "column", sm: "row" }} gap="4" fontWeight="medium" w={{ base: "full", sm: "auto" }}>
          <Link
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="2"
            h="12"
            w={{ base: "full", md: "158px" }}
            px="5"
            rounded="full"
            bg="black"
            color="white"
            textDecoration="none"
            _hover={{ bg: "#383838" }}
            _dark={{ bg: "white", color: "black", _hover: { bg: "#ccc" } }}
          >
            <Box filter="invert(1)" _dark={{ filter: "none" }} display="flex">
              <Image src="/vercel.svg" alt="Vercel logomark" width={16} height={14} />
            </Box>
            Deploy Now
          </Link>
          <Link
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="12"
            w={{ base: "full", md: "158px" }}
            px="5"
            rounded="full"
            borderWidth="1px"
            borderColor="blackAlpha.200"
            textDecoration="none"
            _hover={{ bg: "blackAlpha.50", borderColor: "transparent" }}
            _dark={{ borderColor: "whiteAlpha.300", _hover: { bg: "#1a1a1a" } }}
          >
            Documentation
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
}
