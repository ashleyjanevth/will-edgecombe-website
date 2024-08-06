'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';

const HomePage = () => {
  const imageCount = 36;
  const images = [...Array(imageCount).keys()].map(i => i + 1);

  return (
    <Box
      backgroundColor="black"
      overflow="hidden"
      position="relative"
      display="flex"
    >
      <Box position="absolute" top="270">
        <Image src="/images/logo.png" width="750" height="450" alt="Will Edgecombe Logo" />
      </Box>
      <SimpleGrid columns="9" spacing="0">
        {images.map((num) => (
          <Box key={num}>
            <Image
              src={`/images/desktop/${num}_website_desktop.jpg`}
              width="400"
              height="400"
              alt="Will Edgecombe Photography"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;