import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../resources/images/logo.png'

const Header = () => {
  const {user,logOut} = useAuth()
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <img
        src={logo}
        width="70px"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="text-primary">
        {
          user.email && `Signed in as: ${user.displayName}`
        }
      </Navbar.Text>
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/treatments">Treatments</Nav.Link>
      <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
      {
        !user.email && <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      {
        !user.email && <Nav.Link as={Link} to="/register">Sign up</Nav.Link>
      }
      {
        user.email &&  <button onClick={logOut}>logout</button>
      }
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;

// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import logo from '../../../src/Foodstack/logo.png'

// const Header = () => {
//     return (
//         <>
//   <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
//     <Container>
//     {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
//     <img
//         src={logo}
//         width="200"
//         height="55"
//         className="d-inline-block align-top"
//         alt="React Bootstrap logo"
//       />
//       <Navbar.Toggle />
//     <Navbar.Collapse className="justify-content-end">
//       <Navbar.Text>
//         Signed in as: <a href="#login">Mark Otto</a>
//       </Navbar.Text>
//       <Nav.Link as={Link} to="/login">Login</Nav.Link>
//       <Nav.Link as={Link} to="/sign_up">Sign up</Nav.Link>
//     </Navbar.Collapse>
//     </Container>
//   </Navbar>
// </>
//     );
// };

// export default Header;