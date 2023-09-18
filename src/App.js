import logo from './logo.svg';
import './App.css';
import React from "react";
import Nav from "./Nav"
import Button from "./Button"
import Data from "./Data"
import Card from "./Card";

function App() {

  const [menu,setMenu] = React.useState(Data);

  // const ncard = (val) => {
  //   return (<Card id={val.id} time={val.time} name={val.name} desc={val.desc} read={val.read} imglink={val.imglink}/>);
  // }
  return (
    <>
      <Nav></Nav>
      {/* <div className="container">
      <Card menuData={menu}/>
      </div> */}
    </>
  );
}

export default App;
