import "./styles.css";
import { useState, useContext } from "react";
import UserContext from "./context";

export default function Deposit() {
  const ctx = useContext(UserContext);
  const [deposit, setDeposit] = useState("");

  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;

  const [availablebal, setAvailableBal] = useState(balAnce);
  const [setShow] = useState(true);

  function validate(field, label) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (Number(field) <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(deposit, "deposit")) return;
    var Money = balAnce + Number(deposit);
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    alert("₹ Deposited Successfully  " + deposit);
    console.log(availablebal);
  }

  function AC() {
    setDeposit("");
    setShow(true);
  }

  return (
    <>
      <form>
        <div className="#">
          <center>
            <h3 className="#">Deposit in Your Account</h3>
          </center>

          <div className="#">
            <label>
              <h4>Balance : ₹ {availablebal}</h4>
            </label>
          </div>

          <div className="#">
            <label>
              <h4>Deposit</h4>
            </label>
            <input
              type="number"
              className="account"
              placeholder="Enter Your Amount "
              value={deposit}
              onChange={(e) => setDeposit(Number(e.currentTarget.value))}
            />
          </div>

          <div>
            <center>
              <button type="submit" className="account" onClick={handleCreate}>
                Deposit
              </button>
            </center>
          </div>
        </div>
      </form>
    </>
  );
}
