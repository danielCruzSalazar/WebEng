import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/styles.css'
import EXPOIng from './pages/EXPO-Ingenieria';
import Laboratorio from './pages/Laboratorio';
import PaginaInicio from './pages/Main-page';
import Layout from './pages/Layout.js';
import Login from './pages/Login';
import TeamViewer from './pages/TeamViewer';
import Voting_kp from './pages/VoteKp';
import Results from './pages/Resultados';
import Voting_or from './pages/VoteOr';
import Voting_ah from './pages/VoteAh';
import Voting_vm from './pages/VoteVm';
import Voting_fa from './pages/VoteFa'
import Voting_mo from './pages/VoteMo'
import Voting_ma from './pages/VoteMa'
import Voting_xa from './pages/VoteXa'
import Voting_jc from './pages/VoteJc'
import VotingNm from './pages/VoteNm'
import VotingAs from './pages/VoteAs'
import VotingBjs from './pages/VoteBf'
import VotingMg from './pages/VoteMg'
import VotingGg from './pages/VoteGg'
import VotingMs from './pages/VoteMs'
import NoRegister from './pages/Error-pages/U_cant_register'
import { Row, Col } from 'react-bootstrap';

function PrincipalNavBarDropdown() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top shadow">
       
        <Container>
          
          <Navbar.Brand href="/PaginaInicio">
            <img className="d-inline-block align-top"
              src="./cetys-logo.png" alt="logo"
              width="70" height="60"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="d-inline-block responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <NavDropdown title="Eventos" id="collapsible-nav-dropdown">
              </NavDropdown>
              
                {/* <NavDropdown.Item as={Link} to={"/eventos/expo-ingenierias"}>EXPO Ingenierías</NavDropdown.Item> */}
                <NavDropdown title="EXPO Ingenierias " id="collapsible-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/eventos/expo-ingenierias"}>Inicio</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/eventos/expo-ingenierias/layout"}>Mapa</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/eventos/expo-ingenierias/votacion-resultados"}>Resultados Votación</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/teamviewer"}>Proyectos</NavDropdown.Item>
                
                </NavDropdown>
                <NavDropdown title="Laboratorio" id="collapsible-nav-dropdown">
                </NavDropdown>
                {/* <NavDropdown.Item href="#eventos/3.2"> Evento 2</NavDropdown.Item>
              <NavDropdown.Item href="#eventos/3.3"> Evento 3</NavDropdown.Item> */}
              
              {/* <Nav.Link as={Link} to={"/laboratorio"}>LABORATORIO</Nav.Link> */}

              {/* <Nav.Link as={Link} to={"/post"}>POST</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
          <Nav.Link as={Link} to="/user-login">
            <img className=""
              src="./user-icon2.png"
              alt="User Profile"
              width="35"
              height="35"
            />
          </Nav.Link>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/PaginaInicio" element={<PaginaInicio />} />
          <Route path="/eventos/expo-ingenierias" element={<EXPOIng />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/eventos/expo-ingenierias/layout" element={<Layout />} />
          <Route path="/eventos/expo-ingenierias/votacion-resultados" element={<Results />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/teamviewer" element={<TeamViewer />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-kn" element={<Voting_kp />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-ur" element={<Voting_or />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-ah" element={<Voting_ah />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-vm" element={<Voting_vm />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-fa" element={<Voting_fa />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-mo" element={<Voting_mo />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-ma" element={<Voting_ma />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-xa" element={<Voting_xa />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-jc" element={<Voting_jc />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-nm" element={<VotingNm />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-as" element={<VotingAs />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-bf" element={<VotingBjs />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-mg" element={<VotingMg />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-gg" element={<VotingGg />} />
          <Route path="/eventos/expo-ingenierias/votacion/votacion-ms" element={<VotingMs />} />
          <Route path="/eventos/expo-ingenierias/registro" element={<NoRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default PrincipalNavBarDropdown;