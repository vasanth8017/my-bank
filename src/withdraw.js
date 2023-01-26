import "./styles.css";
import { useState, useContext } from "react";
import UserContext from "./context";

export default function Withdraw() {
  const ctx = useContext(UserContext);
  const [withdraw, setWithdraw] = useState("");
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);

  function validate(field, label) {
    if (field >= balAnce) {
      alert("Sorry mate, you don't have enough cash to Withdraw");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(withdraw, "withdraw")) return;

    var Money = balAnce - withdraw;
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;

    alert("₹ Withdraw Successfully  " + withdraw);
  }
  // eslint-disable-next-line no-unused-vars
  function AC() {
    setWithdraw("");
  }
  return (
    <>
      <form>
        <div className="#">
          <center>
            <h3 className="#">Withdraw in Your Account</h3>
          </center>
          <div className="#">
            <label>
              <h4>Balance : ₹ {availablebal}</h4>
            </label>
          </div>

          <div className="#">
            <label>
              <h4>Withdraw</h4>
            </label>
            <input
              type="number"
              className="account"
              placeholder="Enter Your Withdraw Amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
          </div>

          <div>
            <center>
              <button
                type="submit"
                className="account"
                disabled={!withdraw}
                onClick={handleCreate}
              >
                Withdraw
              </button>
            </center>
          </div>
        </div>
      </form>
    </>
  );
}