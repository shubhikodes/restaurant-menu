import React, {useState} from "react";
import Button from "./Button";
import Data from "./Data";
import Card from "./Card";


const Nav = (props) => {
   
    let oldData=[];
    
    let[timeMenu,setTimeMenu]=useState(Data);
    const[oldMenu,setNewMenu]=useState(oldData);

    const ChangeMenu = (e) => {
        // oldData=[{}];
        
        console.log(timeMenu);
        console.log("clicked");
        
        // console.log(oldData);
        
        // console.log(e);
        // console.log("heyy....",e.target.name);
        //console.log(val);
        
            // timeMenu.splice(0,timeMenu.length);
            setTimeMenu(oldData);
            Data.filter((val)=>{
                // console.log(val);
                // console.log(e.target.name);
                if(e.target.name===val.time && e.target.name!=="All")
                {
                    // console.log(val);
                    // console.log(val.time);
                    // console.log(e.target.name);
                    return setTimeMenu((oldItems)=>{
                        return ([...oldItems,val]);
                    })
                }
                else if(e.target.name=="All")
                {
                    setTimeMenu(Data);
                }
                
            })
            console.log(timeMenu);
        
    }
    
    return(
        <>
            <nav className="navbar">
                <Button bname="Breakfast" onSelect={ChangeMenu}></Button>
                <Button bname="Lunch" onSelect={ChangeMenu}></Button>
                <Button bname="Dinner" onSelect={ChangeMenu}></Button>
                <Button bname="All" onSelect={ChangeMenu}></Button>  
            </nav>
            <div className="container">
                <Card menuData={timeMenu}/>
            </div>
        </>
    )
}
export default Nav;