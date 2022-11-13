import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cards from '../Components/Cards';

function Screen1() {
  const navigate = useNavigate();
  return (
    <div className="main_container">
      <div className="mid_div">
        {" "}
        UI/UX &gt; Refer & Earn &gt;{" "}
        <div
          onClick={() => {
            navigate(`/Screen2`);
          }}
        >
          Freinds Referred (click for screen-2 )
        </div>
      </div>
      <div className="first_content">
        <div>
          <p className="para_1">Your Referral Code</p>

          <div className="brdr_1">
            <p>E D C H 5 4</p>
          </div>
        </div>
        <div className="scnd_content">
          <div className="para_2">
            <p className="p1">Wallet Balance</p>

            <p className="p2">₹ 500 </p>
          </div>
        </div>
      </div>
      <p className="enrolled">
        Friends who enrolled <span className="three">(3) </span>
      </p>

      <div className="main_cards">

    <Cards/>
      </div>
      <div className='terms'>Terms and Conditions</div>
    </div>
  )
}

export default Screen1