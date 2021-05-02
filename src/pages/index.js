import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NavBar from "../components/nav/index"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import ModalDetail from "../components/ModalDetail"
import { AiOutlineHome } from "react-icons/ai"
import { useState } from "react"

const ContainerStyle = styled(Container)`
  max-width: 100% !important;
`

const Contner = styled.div`
  .ranger-un {
    background: #f7931e;
  }
  .ranger-un:hover {
    background: #fff;
    transition: 0.9s;
    width: 40%;
    flex: 3;
  }

  .ranger-deux {
    background: #42210b;
  }
  .ranger-deux:hover {
    background: #fff;
    transition: 0.9s;
    flex: 3;
  }
  /* 
 .ranger-deux
 {
   background: blue;
 } */
  .ranger-deux:hover {
    background: #fff;
    transition: 0.9s;
    flex: 3;
  }

  .ranger-trois {
    background: #c1272d;
  }
  .ranger-trois:hover {
    background: #fff;
    transition: 0.9s;
    flex: 3;
  }

  .ranger-quatre {
    background: #f15a24;
  }
  .ranger-quatre:hover {
    background: #fff;
    transition: 0.9s;
    flex: 3;
  }

  .column {
    height: 100vh;
    .appercu {
      display: none;
    }

    span {
      font-size: 50px;
      font-size: 50px;
      color: #fff;
      font-weight: 700;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .column:hover {
    .appercu {
      display: block;
    }
    span {
      color: #000;
      font-size: 30px;
      margin: auto;
      position: relative;
      top: 0px;
      left: 45%;
      transform: translate(-50%, -50%);
      border: 1px solid #000;
      padding: 10px;
      cursor: pointer;
    }
  }

  .modal-dialog {
    width: 100% !important;
    max-width: 100%;
    top: 0;
    margin: 0;
    height: 100vh !important;
  }
`

const IndexPage = () => <div>hello world</div>

export default IndexPage
