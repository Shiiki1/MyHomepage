import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Sorry :(</Heading>
      <Text>Nothing here yet. Check back later!</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Okay</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
