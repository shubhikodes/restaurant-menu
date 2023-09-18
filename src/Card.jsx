import React from "react";

const Card = ({menuData}) => {
    // console.log(menuData);
     
    return (
        <>
            {
                menuData.map((val) => {
                    return (
                        <>
                            <div className="card">
                                <span className="cardid">{val.id}</span>
                                <div className="cardtime">{val.time}</div>
                                <div className="cardtitle">{val.name}</div>
                                <div className="carddesc">{val.desc}</div>
                                    <div className="csect">
                                        <hr></hr>
                                        <span className="cread">{val.read}</span>
                                    </div>
                                <img className="cardimg" src={val.imglink} alt="food img"/>
                                <div><button className="orderbutton">Order Now</button></div> 
                             </div>
                            
                        </>
                    )
                })
            }
        </>
    )
}

export default Card;



// return (
//     <>
//         <div className="card">
//             <span className="cardid">{props.id}</span>
//             <div className="cardtime">{props.time}</div>
//             <div className="cardtitle">{props.name}</div>
//             <div className="carddesc">{props.desc}</div>
//             <div className="cread">{props.read}</div>
//             <div className="csect">
//                 <hr></hr>
//                 <span className="cread">{props.read}</span>
//             </div>
//             <img className="cardimg" src={props.imglink} alt="food img"/>
//             <button className="orderbutton">Order Now</button> 
//         </div>
//     </>
// )