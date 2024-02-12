import React from 'react';
import './style.css'; 
const BirthdayCard = () => {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY Cham Myae!</h3>
        <p>Dear Cham Myae,</p>
        <p>
          Happy birthday!! I hope your day is filled with lots of love and
          laughter! May all of your birthday wishes come true.
        </p>
        <p className="name">Htoo</p>
      </div>
    </div>
  );
};

export default BirthdayCard;