import React from "react";
import SpinnerComponent from "../components/spinnerComponent";
import WeatherContainerComponent from "../containerComponents/weatherContainerComponent";

export default function ContainerComponent(props){
	let initialLoad=props.state.initialLoad;
	if(initialLoad){
		return <SpinnerComponent/>;
	}else{
		return <WeatherContainerComponent />
	}
	
}
