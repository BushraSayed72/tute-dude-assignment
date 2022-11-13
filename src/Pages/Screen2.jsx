import React from "react";
import { useNavigate } from "react-router-dom";
import Screen2mid from "../Components/Screen2mid";

function Screen2() {
  const navigate = useNavigate();
  return (
    <div className="main_container">
      <div className="mid_div">
        {" "}
        UI/UX &gt;{" "}
        <span
          onClick={() => {
            navigate(`/`);
          }}
        >
          {" "}
          Refer & Earn &gt;{" "}
        </span>
      </div>
      <div className="first_container">
        <div className="box">
          <div className="box_head">

            <div className="box_container">
              <p>Referral Earning</p>
              <div className="money">
                <p>₹ 2,500</p>
              </div>
            </div>
            <div className="box_container">
              <p>Total Referrals</p>
              <div className="money">
                <p>7</p>
              </div>
            </div>
            <div className="box_container">
              
            <p>Wallet Balance</p>
              <div className="money">
              <p className="five_hundred">₹ 500</p>
              </div>
            </div>
          </div>
          <div className="button_withdraw">
          <button className="withdraw">
            <p>Withdraw Balance</p>
          </button>

          </div>
        </div>
        <div className="referral_code">
          <p className="code_para"> Your Referral Code </p>
          <div className="code">
            <p className="alpha">EDCH54</p>
          </div>
        </div>
      </div>
      <div className="question">How does it work ?</div>

      <Screen2mid />

      <div className="who-enrolled">Friends Who Enrolled</div>
      <div className="terms who-enrolled-terms">Terms and Conditions</div>
    </div>
  );
}

export default Screen2;
