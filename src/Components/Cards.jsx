import React from "react";

function Cards() {
  return (
    <>
      <div className="cards">
        <div className="card_container order-md-first order-sm-first">
          <div className="name_date">
            <p className="name">Dhiraj Saxena</p>
            <p className="date"> 14 Sep, 2022</p>
          </div>
          <div className="card_content">Courses Enrolled(6)</div>
          <div className="third_content">
            <p className="ux-ui">
              <span className="same">UX,UI</span>
            </p>
            <p className="photoshop">
              <span className="same">Photoshop</span>
            </p>
            <p className="ilustrator">
              <span className="same">Ilustrator</span>
            </p>
          </div>

          <div className="fourth_content">
            <p className="python">
              <span className="same">Python</span>
            </p>
            <p className="mern">
              <span className="same">MERN</span>
            </p>
            <p className="java">
              <span className="same">Java</span>
            </p>
            <p className="c">
              <span className="same">C++</span>
            </p>
          </div>
          <div className="amount">
            <span className="same">Referral Amount</span>{" "}
            <span className="rupees">₹185 </span>
          </div>
        </div>

        <div className="card_container order-md-second order-sm-second"  >
          <div className="name_date">
            <p className="name">Prafull Kumar</p>
            <p className="date"> 14 Sep, 2022</p>
          </div>
          <div className="card_content">Courses Enrolled(6)</div>
          <div className="third_content">
            <p className="ux-ui">
              <span className="same">UX,UI</span>
            </p>
            <p className="photoshop">
              <span className="same">Photoshop</span>
            </p>
            <p className="ilustrator">
              <span className="same">Ilustrator</span>
            </p>
          </div>
          <div className="fourth_content">
            <p className="python">
              <span className="same">Python</span>
            </p>
            <p className="mern">
              <span className="same">MERN</span>
            </p>
            <p className="java">
              <span className="same">Java</span>
            </p>
            <p className="c">
              <span className="same">C++</span>
            </p>
          </div>

          <div className="amount">
            <span className="same">Referral Amount</span>
            <span className="rupees">₹485 </span>
          </div>
        </div>

        <div className="card_container third-card order-md-third order-sm-third">
          <div className="name_date">
            <p className="name">Praful Kumar</p>
            <p className="date"> 14 Sep, 2022</p>
          </div>
          <div className="card_content">Courses Enrolled(6)</div>
          <div className="third_content">
            <p className="ux-ui">
              <span className="same">UX,UI</span>
            </p>
            <p className="photoshop">
              <span className="same">Photoshop</span>
            </p>

            <p className="ilustrator">
              <span className="same">Ilustrator</span>
            </p>
          </div>

          <divs className="fourth_content">
            <p className="python">
              <span className="same">Python</span>
            </p>
            <p className="mern">
              <span className="same">MERN</span>
            </p>
            <p className="java">
              <span className="same">Java</span>
            </p>
            <p className="c">
              <span className="same">C++</span>
            </p>
          </divs>

          <p className="amount">
            <span className="same">Referral Amount</span>{" "}
            <span className="rupees">₹485 </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
