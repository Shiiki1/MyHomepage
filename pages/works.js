import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSD1 from '../public/images/works/SportDash.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="SportDash" title="NBA Dashboard" thumbnail={thumbSD1}>
            Player and Team Metrics Evaluation
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
