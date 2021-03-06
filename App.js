import React, {Component} from 'react';
import {ImageBackground, TextInput, StyleSheet, Text, View} from 'react-native';
import Images from './asset/images';
import Forecast from './Forecast';
import Openweather from './openweathermap';
export default class App extends Component {



  state =  {
    forecast: null
  };



  handleTextChange = event => {
      let zip = event.nativeEvent.text;
      Openweather.fetchForecast(zip).then(forecast=>
        {
        //console.log(forecast);
        this.setState({forecast : forecast});
        });
  };



  render() {

   //This is the parameters to be passed to Forecast Component 

  let content = null;
  if(this.state.forecast !== null){
    content = (
      <Forecast 
        main = {this.state.forecast.main}
        description = {this.state.forecast.description}
        temp = {this.state.forecast.temp} />
    );
  }



    return (

      //This is our main return of rendering that is what will be displayed   

      <View style={styles.container}>
      <ImageBackground source={Images.first} style={styles.input1}>
        <Text style={styles.text}>Enter Your City:</Text>
        <TextInput style={styles.input}
          onSubmitEditing={this.handleTextChange} 
          underlineColorAndroid="transparent"
          />
          {content}
      </ImageBackground>
      </View>


    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666',
  },
text : {
    color: 'yellow',
    fontFamily: "Lobster-Regular",
    fontSize: 30
  },
input:{
  borderRadius: 50,
  borderWidth: 2,
  fontSize: 20,
  color: "#fff",
  backgroundColor: 'maroon',
  width: 200
},
input1 : {
  flex: 1,
  justifyContent:"center",
  alignItems:"center",
  width: '100%',
  height: '100%'
}
});
