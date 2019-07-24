import React from "react";
import RadioButtonComponent from "./radioButtonComponent";
import CssBaseline from '@material-ui/core/CssBaseline';
import {connect} from "react-redux";
import HorizantalScrollCard from "../containerComponents/horizantalscrollingComponent";
import WeatherCard from "../components/weatherCardComponent";
function WeatherContainerComponent(props){
		 
	return (<div className="radioButtonDiv">
				<RadioButtonComponent />
				<CssBaseline />	
				<HorizantalScrollCard cityName={props.city} weatherData={props.weatherData} temperatureType={props.radioButtonVaue}/>
				<CssBaseline />						
			</div>);
}

const mapStateToProps=(state)=>{
  return {    
    radioButtonVaue:state.radioButtonVaue,
    city:state.city,
    weatherData:state.weatherData,    
  }
}

const mapDispachToProps =(dispatch)=>{
 return {
    upDateWeatherData:(responseData)=>{
      dispatch({ type:"GET_DATA", weatherData:responseData});
    }
 }
}

export default connect(mapStateToProps,mapDispachToProps)(WeatherContainerComponent);