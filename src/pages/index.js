import React, { useState, useEffect } from "react";
import { sendMail } from "../services/sendMail";


function HomePage() {

  async function handleOnClick (){
    let response = await sendMail('https://craftcode.design/');
    console.log(response);
  }

  const buttonWrapperStyle = {
    color: "white",
    display: "inline-block",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    maxWidth: '240px',
    margin: '0 auto',
    borderRadius: '3px'
  };

  return(<div style={buttonWrapperStyle}>
      <input type="text" value="https://craftcode.design/" /><button  onClick={ () => handleOnClick()}>Send me this url</button>
    </div>)
}

export default HomePage;