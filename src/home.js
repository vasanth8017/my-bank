import { Card } from "react-bootstrap";
import "./styles.css";
import Bank from "./bank.png";

export default function Home() {
  return (
    <>
      <div id="#">
        <div id="account">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={Bank} />
          <h1>ICICI bank</h1>
          <h2>Welcome to the bank. You can move on using the Createaccount.</h2>
        </Card>
        </div>
      </div>
    </>
  );
}

