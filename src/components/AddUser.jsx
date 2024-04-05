import React from "react";
import mailSvg from "../assets/mail.svg";
import womanSvg from "../assets/woman.svg";
import womanAgeSvg from "../assets/growing-up-woman.svg";
import mapSvg from "../assets/map.svg";
import phoneSvg from "../assets/phone.svg";
import padlockSvg from "../assets/padlock.svg";
import { useState } from "react";

const AddUser = ({ personData,setselectedPerson}) => {
  // const [update, setUpdate] = useState(setPersonData);

  const handleButton = (e) => {
    const altValue = e.target.alt;
    console.log(altValue);
    setselectedPerson(
      personData[altValue]
    );
  };

  return (
    <div>
      <div className="values-list">
        <button onClick={handleButton} className="icon" data-label="name">
          <img src={womanSvg} alt="name" id="iconImg" />
        </button>
        <button onClick={handleButton} className="icon" data-label="email">
          <img src={mailSvg} alt="email" id="iconImg" />
        </button>
        <button onClick={handleButton} className="icon" data-label="age">
          <img src={womanAgeSvg} alt="age" id="iconImg" />
        </button>
        <button onClick={handleButton} className="icon" data-label="street">
          <img src={mapSvg} alt="location" id="iconImg" />
        </button>
        <button onClick={handleButton} className="icon" data-label="phone">
          <img src={phoneSvg} alt="phone" id="iconImg" />
        </button>
        <button onClick={handleButton} className="icon" data-label="password">
          <img src={padlockSvg} alt="password" id="iconImg" />
        </button>
      </div>
      <div className="btn-group">
        <button className="btn" type="button">
          new user
        </button>
        <button className="btn" type="button">
          add user
        </button>
      </div>
    </div>
  );
};

export default AddUser;
