import React, { useState } from 'react';
import NavBar from "./component/NavBar";
import Homepage from "./component/Homepage";

const App = () => {
  const [cardData,setcardData]= useState([]);

  return (
    <>
        <NavBar/>
        <Homepage cartData={{cardData,setcardData}}/>
    </>
  )
}

export default App
