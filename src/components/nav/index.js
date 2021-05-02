import * as React from "react"
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import NavBarStc from './nav.stc';

//import PropTypes from "prop-types"
//import { Link } from "gatsby"

const NavBar = (props) => {
      const [isOpen, setIsOpen] = useState(false);
    
      const toggle = () => setIsOpen(!isOpen);
    
      return (
        <div>
        <NavBarStc>
          <Navbar className='navbar' light expand="md">
            <NavbarBrand href="/">
                <img width="50%" src="../images/gatsby-icone.png" alt="DesignKoncept" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                </UncontrolledDropdown>
              </Nav>
              <NavbarText className='mx-1'>Acceuil</NavbarText><br/>
              <NavbarText className='mx-1'>Catalogue</NavbarText><br/>
              <NavbarText className='mx-1'>Contact</NavbarText>
            </Collapse>
          </Navbar>
          </NavBarStc>
        </div>
      );
    }
    
    export default NavBar;
