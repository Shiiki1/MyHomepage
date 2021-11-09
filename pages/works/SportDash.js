import { Container, Badge, Link, List, ListItem, Video  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, WorkVideo, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'



const Work = () => (
  <Layout title="NBA Metrics Dashboard">

    <Container>
      <Title>
        NBA Metrics Dasboard <Badge>2021</Badge>
      </Title>
      <P>
        A simple Dasboard created with Power Bi and R that allows the user to analyze certain evaluation metrics of NBA players and teams from the 2020/21 Season.
      </P>
      <List ml={4} my={4}>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Windows Power BI, R Studio</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/Capture1.png" alt="SportDash" />
      <WorkImage src="/images/works/Capture2.png" alt="SportDash" />
      <WorkImage src="/images/works/Capture3.png" alt="SportDash" />
    </Container>
  </Layout>
)

export default Work
