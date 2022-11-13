import React from "react";
import invite from "../Images/inviteicon.png";
import rupeeicon from "../Images/rupeeicon.png";
import transfer from "../Images/transfermoneyicon.png";
import purchase from "../Images/perchasecourseicon.png";
import percent from "../Images/percntofficon.png";

function Screen2mid() {
  return (
    <div className="mid_details">
      <div className="invite_friend">
        <div className="border">
          <img src={invite} alt="invite" />
        </div>
        <div className="invite_friend_content">
          <p className="invite-head">Invite your Friends</p>
          <p>Share the link tutedude.com with your friends</p>
        </div>
      </div>
      <div className="invite_friend">
        <div className="border">
          <img src={rupeeicon} alt="rupee" />
        </div>
        <div className="invite_friend_content">
          <p className="invite-head">You get ₹ 200 as referral money</p>
          <p>On total purchase the friend makes, into your wallet</p>
        </div>
      </div>

      <div className="invite_friend">
        <div className="border">
          <img src={transfer} alt="transfer" />
        </div>
        <div className="invite_friend_content">
          <p className="invite-head">Transfer money from wallet</p>
          <p>
            When the wallet balance reaches ₹200 or more, you can withdraw it
          </p>
        </div>
      </div>

      <div className="invite_friend">
        <div className="border">
          <img src={purchase} alt="invite" />
        </div>
        <div className="invite_friend_content">
          <p className="invite-head">Your Friend gets ₹ 200 Off </p>
          <p>
            On his overall fee on successful purchase using your referral code{" "}
          </p>
        </div>
      </div>

      <div className="invite_friend">
        <div className="border">
          <img src={percent} alt="invite" />
        </div>
        <div className="invite_friend_content">
          <p className="invite-head">Invite your Friends</p>
          <p>Share the link tutedude.com with your friends</p>
        </div>
      </div>
    </div>
  );
}

export default Screen2mid;
