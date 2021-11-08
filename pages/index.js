import Nextlink from 'next/link'
import { Button,
	 			 Container,
				 Box,
				 Heading,
				 Image,
				 Link,
				 SimpleGrid,
				 List,
				 ListItem,
				 Icon,
				 useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph.js'
import { BioSection, BioYear } from '../components/bio'
import { GridItem} from '../components/grid-item'
import {
	IoLogoLinkedin,
	IoLogoGithub,
}	from 'react-icons/io5'


const Page = () => {
	return (
		<Container>
			<Box borderRadius='lg'
			 bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
			 p={3} mb={6} align="center">
				Interact with the ball :)
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
							Maik Moellerfrerk
					</Heading>
					<p> B.A. International Management </p>
					 <p> (Finance and Controlling)</p>

				</Box>
					<Box
					 flexShrink={0}
					 mt={{ base: 4, md: 0}}
					 ml={{ md: 6 }}
					 align = "center"
					 >
						<Image borderColor="whiteAlpha.800"
						 borderWidth={2} borderStyle="solid"
						 maxWidth="140px"
						 display="inline-block"
						 borderRadius="full"
						 src="/images/maik1.jpg"
						 alt= "Profile Image"/>
					</Box>
			</Box>

			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					About this Website
				</Heading>
					<Paragraph> This website is a small project of mine to get familiar
					   					with JavaScript. As of now, it is still empty, but I
											plan to use this to collect all IT projects I work on in the future.

											{''}
						<Nextlink href="/works/SupLink*">
							<Link></Link>
						</Nextlink>

					</Paragraph>
						<Box align="center" my={6}>
							<Nextlink href="works">
								<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
									Portfolio
							</Button>
					</Nextlink>
					</Box>
			 </Section>

			 <Section delay={0.2}>
			 		<Heading as="h3" variant="section-title" >
						Bio
					</Heading>
				<BioSection md={5} >
						<BioYear > 1995 </BioYear>
							Born in Münster, Germany
				</BioSection>
				<BioSection>
						<BioYear> 2015 </BioYear>
							Graduated High School: Private Business School Middendorf
				</BioSection>
				<BioSection>
						<BioYear>2015 - Now </BioYear>
							Financial Administration of the Family Business
				</BioSection>
				<BioSection>
						<BioYear> 2016 - 2018 </BioYear>
						 	2 years abroad in Australia
				</BioSection>


				<BioSection>
						<BioYear> 2018 - 2021 </BioYear>
							Founder and CEO of Start-Up Kami-Holo
				</BioSection>
				<BioSection>
						<BioYear> 2020 - 2021 </BioYear>
							Project manager at mybacs, BioTech Start-Up
				</BioSection>
				<BioSection>
						<BioYear> 2021 </BioYear>
					Online Semester Abroad at the Meiji University in Tokyo
					(Innovation and Strategy)
				</BioSection>
				<BioSection>
						<BioYear> 2022 </BioYear>
						Graduate B.A. International Management University of Applied Science Osnabrück
						(Finance & Controlling)
				</BioSection>

				</Section>
				<Section delay={0.3}>
			        <Heading as="h3" variant="section-title">
			           Things I like
			         </Heading>
			         <Paragraph>
			           Basketball, Movies, Music, Technology, Finance
			         </Paragraph>
			       </Section>

						 <Section delay={0.3}>
	        <Heading as="h3" variant="section-title">
	          Social
	        </Heading>
	        <List>
	          <ListItem>
	            <Link href="https://github.com/shiiki1" target="_blank">
	              <Button
	                variant="ghost"
	                colorScheme="teal"
	                leftIcon={<Icon as={IoLogoGithub} />}
	              >
	                @shiiki1
	              </Button>
	            </Link>
	          </ListItem>

						<ListItem>
					 <Link href="https://www.linkedin.com/in/maik-moe/" target="_blank">
						 <Button
							 variant="ghost"
							 colorScheme="teal"
							 leftIcon={<Icon as={IoLogoLinkedin} />}
						 >
							 @maik-moe
						 </Button>
					 </Link>
				 </ListItem>

						</List>
					</Section>
				</Container>

	)
}

export default Page
