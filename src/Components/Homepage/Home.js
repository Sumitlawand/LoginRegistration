import React from "react";
import "./Home.css";

const Home=({setLog})=>{

    return(
        <div className="homepage">
            <h1>Homepage</h1>
            <button className="button" onClick={()=>setLog()}>Log Out</button>
        </div>
    )
}

export default Home;