import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NavBar from "../components/nav/index"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"; 

 const Contner = styled.div`

 .contner
 {
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   background: beige;
  // width: 100%;
   //height: 100vh;
 }

 .ranger-un
 {
   background: yellow;
 }
 .ranger-un:hover
 {
   background: azure;
   transition: .9s;
   width: 40%;
   flex: 3;
 }

 .ranger-deux
 {
   background: blue;
 }
 .ranger-deux:hover
 {
   background: bisque;
   transition: .9s;
   flex: 3;
 }

 .ranger-deux
 {
   background: blue;
 }
 .ranger-deux:hover
 {
   background: oldlace;
   transition: .9s;
   flex: 3;
 }

 .ranger-trois
 {
   background: green;
 }
 .ranger-trois:hover
 {
   background: firebrick;
   transition: .9s;
   flex: 3;
 }

 .ranger-quatre
 {
   background: skyblue;
 }
 .ranger-quatre:hover
 {
   background: rebeccapurple;
   transition: .9s;
   flex: 3;
 }

`;




const IndexPage = () => (

  <Contner className='contner'>
    <NavBar/>
  <Container fluid>
    <Row >
      <Col className='ranger-un'>
        1
      </Col>

      <Col className='ranger-deux'>
        2
      </Col>    

    <Col className='ranger-trois' >
      3
    </Col>

    <Col className='ranger-quatre'>
    <Layout>
    <Seo title="Home" />
    <h1>Title</h1>
    <p>Text content.</p>
    <StaticImage className= 'img' id= 'img'
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem`,
              cursor: `pointer` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
  </Col>
</Row>
</Container>
</Contner>
)

export default IndexPage
