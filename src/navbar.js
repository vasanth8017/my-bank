import "./styles.css";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar id="nav" variant="light" expand="lg">
        <h3>ICICI</h3>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link className="#" activeClassName="navbar-brand" href="#/home/" title="hpme page" > {" "} Home{" "} </Nav.Link>
          <Nav.Link className="#" title="Create your Account" href="#/CreateAccount/" > {" "} CreateAccount{" "} </Nav.Link>
          <Nav.Link className="#" title="Deposit in your Account" href="#/Deposit/" > Deposit{" "} </Nav.Link>
          <Nav.Link className="#" title="Withdraw from your Account" href="#/Withdraw/" > WithDraw{" "} </Nav.Link>
          <Nav.Link className="#" title="Track your Transactions" href="#/AllData/"> All Data </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}