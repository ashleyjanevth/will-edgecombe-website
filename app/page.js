'use client';
import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';

const Logo = ({ setIsHovered }) => (
	<Box
		height="150"
		position="absolute"
		top="270"
		cursor="pointer"
		onMouseOver={() => setIsHovered(true)}
		onMouseOut={() => setIsHovered(false)}
		zIndex="1"
	>
		<Image
			src="/images/logo.png"
			width="800"
			height="450"
			alt="Will Edgecombe Logo"
		/>
	</Box>
);

const DesktopMenu = () => (
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
			<Heading marginBottom="8" size="3xl">
				INFO
			</Heading>
			<Heading size="3xl"> CONTACT </Heading>
		</Box>
	</Box>
);

const DesktopDisplay = () => {
	const [isHovered, setIsHovered] = useState(false);
	const imageCount = 36;
	const images = [...Array(imageCount).keys()].map((i) => i + 1);

	return (
		<>
			<Logo setIsHovered={setIsHovered} />
			{isHovered ? <DesktopMenu /> : null}
			<SimpleGrid columns="9" spacing="0">
				{images.map((num) => (
					<Box
						key={num}
						position="relative"
						overflow="hidden"
						_hover={{
							opacity: 1,
							transform: 'scale(3, 3)',
							zIndex: 1,
							margin: '20px',
							overflow: 'visable',
						}}
						opacity={0.5}
						transition="opacity 0.3s ease, transform 0.3s ease"
						cursor="pointer"
					>
						<Image
							src={`/images/desktop/${num}_website_desktop.jpg`}
							width="400"
							height="400"
							alt="Will Edgecombe Photography"
							layout="responsive"
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
