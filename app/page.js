'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';

const DesktopDisplay = () => {
	const [isHovered, setIsHovered] = useState(false);
	const imageCount = 36;
	const images = [...Array(imageCount).keys()].map((i) => i + 1);

	return (
		<>
			<Box
				height="150"
				position="absolute"
				top="270"
				cursor="pointer"
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
			>
				<Image
					src="/images/logo.png"
					width="800"
					height="450"
					alt="Will Edgecombe Logo"
				/>
			</Box>
			{isHovered ? (
				<Box
					position="absolute"
					top="0"
					left="0"
					width="100%"
					height="100%"
					backgroundColor="#FFF456"
					display="flex"
					justifyContent="center"
					alignItems="center"
					zIndex="10"
					pointerEvents="none"
				>
					<Box textAlign="center">
						<Box color="black" fontSize="2xl">
							Info
						</Box>
						<Box color="black" fontSize="2xl">
							Contact
						</Box>
					</Box>
				</Box>
			) : null}
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
		</>
	);
};

const MobileDisplay = () => <Box>hello</Box>;

const HomePage = () => {
	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<Box
			backgroundColor="black"
			overflow="hidden"
			position="relative"
			display="flex"
			justifyContent="center"
		>
			{isMobile ? <MobileDisplay /> : <DesktopDisplay />}
		</Box>
	);
};

export default HomePage;
