import React from "react";
import Logo from '../images/optile-logo3.png';
export default (props)=>{

	return (
			<div className="loading-image">
                <img src={Logo} className="App-logo" alt="logo" />                  
                <h3 className="loadingText">Loading.....</h3>
             </div>
		);
} 