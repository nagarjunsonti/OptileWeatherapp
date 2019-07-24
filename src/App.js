/*
Weather Report App.js
 @props: initialLoad,weatherData
*/
import React, {Component} from 'react';
import './App.css';
import {AppBar, Toolbar,Typography,CssBaseline, Container, Box} from '@material-ui/core';
import ContainerComponent from "./containerComponents/containerComponent";
import axios from 'axios';
import {connect} from "react-redux";
class App extends Component {
  
  async getApiData(){
    const apiUrl="https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&units=imperial&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40";
    await axios
      .get(apiUrl)
      .then(res => {
        const responseData = res.data;        
        this.props.upDateWeatherData(responseData);
      })
  }  
  componentDidMount(){    
    setTimeout(()=>{      
      this.getApiData();
    },3000)
  }
  render(){
    return (
            <div className="App">
              <CssBaseline />
              <AppBar>
                <Toolbar>                  
                  <Typography variant="h6">Optile Weather Report</Typography>
                </Toolbar>
              </AppBar>
              <Toolbar />
              <Container>
                <Box my={2}>{                    
                      <ContainerComponent state={this.props}/>                    
                  }
                </Box>
              </Container>

            </div>
          );
  }    
}

const mapStateToProps=(state)=>{
  return {
    initialLoad:state.initialLoad,    
    weatherData:state.weatherData
  }
}

const mapDispachToProps =(dispatch)=>{
 return {
    upDateWeatherData:(responseData)=>{
      dispatch({ type:"GET_DATA", data:responseData});
    }
 }
}
export default connect(mapStateToProps,mapDispachToProps)(App);
