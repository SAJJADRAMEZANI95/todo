import axios from 'axios';
import React,{useState} from 'react';
import {Navbar,Container,Nav,NavDropdown,Dropdown} from 'react-bootstrap'

function Header(props) {
    const [res,setRes]=useState([])
    const [res1,setRes1]=useState([])
    function Issueshandler(){
        axios.get("https://gitlab.com/api/v4/projects/36163448/issues?access_token=glpat-KK318oz33CgxyjbTWnf5")
        .then(re=>setRes(re.data))
        }
    
    function Issueshandler2(){
        axios.get("https://gitlab.com/api/v4/projects/36164947/issues?access_token=glpat-KK318oz33CgxyjbTWnf5")
        .then(re=>setRes1(re.data))
    }
    return (
        <>
        
        <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">TODO-APP</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Projects"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1" onClick={Issueshandler}>Todo1</NavDropdown.Item>
          <Dropdown.Divider />
           
          <NavDropdown.Item href="#action/3.2" onClick={Issueshandler2}>Todo2</NavDropdown.Item>
          <Dropdown.Divider />
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<ul>
{
    res.length>0 ?
    
    res.map(i=><li>{i.title}/{i.author.state}</li>)
    : null
}
</ul>
<ul>
{
    res1.length>0 ?
    
    res1.map(i=><li>{i.title}/{i.author.state}</li>)
    : null
}
</ul>
</>
    );
}

export default Header;